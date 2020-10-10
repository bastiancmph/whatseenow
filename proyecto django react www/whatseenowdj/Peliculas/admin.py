from .models import Peliculas
import csv

# Make some queryset manually using Django shell:

queryset = Peliculas.objects.all()


def query_to_csv(queryset, filename='items.csv', **override):
    field_names = [field.name for field in queryset.model._meta.fields]

    def field_value(row, field_name):
        if field_name in override.keys():
            return override[field_name]
        else:
            return row[field_name]
    with open(filename, 'w') as csvfile:
        writer = csv.writer(csvfile, quoting=csv.QUOTE_ALL, delimiter=',')
        writer.writerow(field_names)  # write the header
        for row in queryset.values(*field_names):
            writer.writerow([field_value(row, field) for field in field_names])


# Example usage:
query_to_csv(queryset, filename='data.csv', user=1, group=1)
