### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Global Rank: [54](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [38]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  1017.0<br />
<br />
Final Rank Value (1017.0) = Starting Rank Value (1061.3) + Head To Head Adjustments (-44.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.539[<sup>1</sup>](#table2)
- Bounty Collected: 0.469[<sup>2</sup>](#table1)
- Opponent Network: 0.325[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.333<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1061.3
- 400 + ( ( 0.333 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1061.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|          112 |       16 | 2024-08-21 | OG                | L   | 1.000      | -            | -                | -                | -         |   -15.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          111 |       46 | 2024-08-21 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -18.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          110 |      118 | 2024-08-19 | Meteor            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          109 |      165 | 2024-08-17 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -12.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          108 |      178 | 2024-08-16 | EYEBALLERS        | W   | 1.000      | 0.435        | -                | 0.550 (0.239)    | 0 (0.000) |     6.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          107 |      255 | 2024-08-13 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -4.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          106 |      305 | 2024-08-12 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -6.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          105 |      326 | 2024-08-12 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -24.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          104 |      443 | 2024-08-07 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -26.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          103 |      456 | 2024-08-07 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -16.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          102 |      526 | 2024-08-05 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -21.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          101 |      564 | 2024-08-04 | Into the Breach   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.87 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          100 |      718 | 2024-07-31 | KOI               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           99 |      771 | 2024-07-30 | Sashi             | W   | 1.000      | 0.500        | 0.180 (0.090)    | 0.989 (0.494)    | 0 (0.000) |    16.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           98 |      954 | 2024-07-24 | Insilio           | W   | 1.000      | 0.500        | -                | 0.482 (0.241)    | 0 (0.000) |     8.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           97 |     1045 | 2024-07-21 | Passion UA        | L   | 0.992      | -            | -                | -                | -         |   -16.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           96 |     1072 | 2024-07-20 | B8                | W   | 0.986      | 0.500        | 0.170 (0.084)    | 1.000 (0.493)    | 0 (0.000) |    15.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           95 |     1167 | 2024-07-18 | fnatic            | W   | 0.972      | 0.500        | 0.348 (0.169)    | 0.677 (0.329)    | 0 (0.000) |    25.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           94 |     1283 | 2024-07-16 | Monte             | W   | 0.960      | -            | -                | -                | 0 (0.000) |     6.87 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           93 |     1304 | 2024-07-16 | EYEBALLERS        | W   | 0.957      | 0.500        | -                | 0.550 (0.263)    | 0 (0.000) |     6.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           92 |     1554 | 2024-06-16 | FAVBET            | W   | 0.759      | -            | -                | -                | -         |     5.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           91 |     1587 | 2024-06-15 | Nemiga            | L   | 0.753      | -            | -                | -                | -         |    -8.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           90 |     1627 | 2024-06-14 | RUBY              | W   | 0.746      | -            | -                | -                | -         |     6.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           89 |     1667 | 2024-06-13 | Monte             | L   | 0.739      | -            | -                | -                | -         |   -12.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           88 |     1693 | 2024-06-12 | 9INE              | W   | 0.733      | -            | -                | -                | -         |     1.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           87 |     1712 | 2024-06-11 | DMS               | W   | 0.726      | -            | -                | -                | -         |     6.87 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           86 |     1722 | 2024-06-11 | EYEBALLERS        | W   | 0.725      | -            | -                | -                | -         |     5.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           85 |     1800 | 2024-06-09 | HAVU              | W   | 0.711      | -            | -                | -                | -         |     2.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           84 |     1809 | 2024-06-09 | Nemiga            | L   | 0.711      | -            | -                | -                | -         |    -8.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           83 |     1832 | 2024-06-08 | Insilio           | L   | 0.707      | -            | -                | -                | -         |   -15.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           82 |     1849 | 2024-06-08 | Passion UA        | W   | 0.706      | 0.500        | 0.170 (0.060)    | 1.000 (0.353)    | -         |    10.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           81 |     1890 | 2024-06-07 | DMS               | W   | 0.700      | -            | -                | -                | -         |     6.84 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           80 |     1906 | 2024-06-07 | EYEBALLERS        | L   | 0.699      | -            | -                | -                | -         |   -16.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           79 |     1928 | 2024-06-07 | 5W                | L   | 0.697      | -            | -                | -                | -         |   -16.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |     1950 | 2024-06-06 | FAVBET            | W   | 0.693      | -            | -                | -                | -         |     3.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |     1978 | 2024-06-06 | Permitta          | L   | 0.692      | -            | -                | -                | -         |   -16.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |     1997 | 2024-06-06 | GhoulsW           | W   | 0.690      | -            | -                | -                | -         |     0.39 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |     2034 | 2024-06-05 | Aurora Young Blud | W   | 0.685      | -            | -                | -                | -         |     5.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |     2073 | 2024-06-04 | CYBERSHOKE        | W   | 0.679      | -            | -                | -                | -         |     5.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |     2081 | 2024-06-04 | Grannys Knockers  | W   | 0.678      | -            | -                | -                | -         |     3.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |     2111 | 2024-06-03 | Johnny Speeds     | L   | 0.671      | -            | -                | -                | -         |    -7.83 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |     2118 | 2024-06-02 | DMS               | W   | 0.666      | -            | -                | -                | -         |     6.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |     2123 | 2024-06-02 | SAW               | W   | 0.666      | 0.143        | 0.349 (0.033)    | -                | -         |    19.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |     2146 | 2024-06-01 | RUBY              | L   | 0.660      | -            | -                | -                | -         |   -14.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |     2161 | 2024-06-01 | DMS               | W   | 0.658      | -            | -                | -                | -         |     6.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |     2165 | 2024-06-01 | KOI               | W   | 0.658      | -            | -                | -                | -         |     7.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |     2169 | 2024-06-01 | FURIA             | L   | 0.657      | -            | -                | -                | -         |    -1.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |     2197 | 2024-05-31 | Passion UA        | W   | 0.651      | 0.435        | 0.170 (0.048)    | 1.000 (0.283)    | -         |     9.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |     2208 | 2024-05-30 | ThunderFlash      | W   | 0.646      | -            | -                | -                | -         |     0.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |     2217 | 2024-05-30 | Passion UA        | L   | 0.646      | -            | -                | -                | -         |   -11.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |     2234 | 2024-05-29 | JANO              | W   | 0.640      | -            | -                | -                | -         |     1.72 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |     2304 | 2024-05-26 | RUBY              | W   | 0.618      | -            | -                | -                | -         |     5.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |     2318 | 2024-05-25 | ex-Guild Eagles   | W   | 0.613      | -            | -                | -                | -         |     3.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |     2322 | 2024-05-25 | Serbia            | W   | 0.612      | -            | -                | -                | -         |     2.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |     2332 | 2024-05-25 | Rhyno             | W   | 0.610      | -            | -                | -                | -         |     6.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |     2336 | 2024-05-24 | ex-Guild Eagles   | L   | 0.606      | -            | -                | -                | -         |   -15.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     2339 | 2024-05-24 | The Suspect       | W   | 0.606      | -            | -                | -                | -         |     3.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     2356 | 2024-05-23 | 3DMAX             | L   | 0.599      | -            | -                | -                | -         |    -1.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     2362 | 2024-05-23 | brazylijski luz   | W   | 0.597      | -            | -                | -                | -         |     3.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     2395 | 2024-05-22 | Sangal            | L   | 0.593      | -            | -                | -                | -         |    -7.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     2401 | 2024-05-22 | Illuminar         | W   | 0.591      | -            | -                | -                | -         |     4.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     2439 | 2024-05-21 | BLEED             | W   | 0.585      | 0.500        | 0.113 (0.033)    | -                | -         |    14.58 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     2444 | 2024-05-21 | Verdant           | W   | 0.584      | -            | -                | -                | -         |     5.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     2465 | 2024-05-20 | Metizport         | W   | 0.580      | -            | -                | -                | -         |     4.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     2501 | 2024-05-19 | B8                | W   | 0.572      | 0.500        | 0.170 (0.048)    | 1.000 (0.286)    | -         |    10.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     2555 | 2024-05-17 | PARIVISION        | L   | 0.560      | -            | -                | -                | -         |    -7.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     2564 | 2024-05-17 | Endpoint          | W   | 0.559      | -            | -                | -                | -         |     7.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     2605 | 2024-05-16 | 1WIN              | L   | 0.551      | -            | -                | -                | -         |   -11.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     2613 | 2024-05-16 | kONO              | W   | 0.550      | -            | -                | -                | -         |     4.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     2654 | 2024-05-15 | 3DMAX             | W   | 0.545      | 0.500        | 0.519 (0.141)    | 0.969 (0.264)    | -         |    16.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     2713 | 2024-05-14 | Preasy            | W   | 0.538      | -            | -                | -                | -         |     2.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     2732 | 2024-05-13 | EYEBALLERS        | W   | 0.532      | -            | -                | -                | -         |     5.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     2761 | 2024-05-12 | Verdant           | W   | 0.525      | -            | -                | -                | -         |     5.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     2831 | 2024-05-09 | 9 Pandas          | L   | 0.505      | -            | -                | -                | -         |    -9.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     2886 | 2024-05-06 | Insilio           | W   | 0.486      | -            | -                | -                | -         |     5.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     2934 | 2024-05-03 | EYEBALLERS        | L   | 0.466      | -            | -                | -                | -         |   -10.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     2945 | 2024-05-03 | Metizport         | L   | 0.464      | -            | -                | -                | -         |   -11.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     2973 | 2024-05-02 | HAVU              | W   | 0.457      | -            | -                | -                | -         |     1.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     2994 | 2024-05-01 | KOI               | W   | 0.451      | -            | -                | -                | -         |     6.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     3010 | 2024-04-30 | Sangal            | L   | 0.445      | -            | -                | -                | -         |    -4.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     3020 | 2024-04-30 | B8                | W   | 0.444      | 0.435        | 0.170 (0.033)    | -                | -         |     6.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     3035 | 2024-04-29 | PARIVISION        | L   | 0.438      | -            | -                | -                | -         |    -5.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     3051 | 2024-04-28 | SINNERS           | W   | 0.432      | -            | -                | -                | -         |     8.61 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     3063 | 2024-04-27 | 500               | W   | 0.427      | -            | -                | -                | -         |     1.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     3084 | 2024-04-27 | SINNERS           | W   | 0.424      | -            | -                | -                | -         |     8.78 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     3108 | 2024-04-26 | Illuminar         | W   | 0.417      | -            | -                | -                | -         |     0.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     3132 | 2024-04-25 | EYEBALLERS        | L   | 0.411      | -            | -                | -                | -         |    -9.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     3154 | 2024-04-24 | ex-Guild Eagles   | L   | 0.404      | -            | -                | -                | -         |   -10.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     3171 | 2024-04-23 | Nemiga            | L   | 0.398      | -            | -                | -                | -         |    -3.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     3179 | 2024-04-22 | Grannys Knockers  | W   | 0.393      | -            | -                | -                | -         |     1.78 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     3186 | 2024-04-22 | Nexus             | W   | 0.391      | -            | -                | -                | -         |     3.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     3232 | 2024-04-20 | RUBY              | W   | 0.378      | -            | -                | -                | -         |     4.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     3259 | 2024-04-19 | PARIVISION        | W   | 0.373      | -            | -                | -                | -         |     6.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     3283 | 2024-04-19 | ALTERNATE aTTaX   | W   | 0.371      | -            | -                | -                | -         |     4.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     3342 | 2024-04-18 | B8                | L   | 0.364      | -            | -                | -                | -         |    -6.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     3367 | 2024-04-17 | B8                | W   | 0.358      | -            | -                | -                | -         |     5.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     3394 | 2024-04-16 | Sangal            | L   | 0.353      | -            | -                | -                | -         |    -3.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     3415 | 2024-04-15 | ALTERNATE aTTaX   | W   | 0.346      | -            | -                | -                | -         |     4.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3465 | 2024-04-12 | JANO              | L   | 0.324      | -            | -                | -                | -         |    -9.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3493 | 2024-04-11 | Alliance          | L   | 0.318      | -            | -                | -                | -         |    -7.80 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3591 | 2024-04-09 | MOUZ NXT          | L   | 0.305      | -            | -                | -                | -         |    -5.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3653 | 2024-04-07 | ex-Preasy         | L   | 0.291      | -            | -                | -                | -         |    -7.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3822 | 2024-04-01 | Nemiga            | L   | 0.251      | -            | -                | -                | -         |    -2.50 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|            9 |     4229 | 2024-03-10 | CYBERSHOKE        | L   | 0.107      | -            | -                | -                | -         |    -3.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     4241 | 2024-03-10 | ECLOT             | W   | 0.105      | -            | -                | -                | -         |     2.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     4257 | 2024-03-09 | Sangal            | W   | 0.099      | -            | -                | -                | -         |     2.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     4306 | 2024-03-07 | Nemiga            | L   | 0.086      | -            | -                | -                | -         |    -0.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     4338 | 2024-03-06 | AURA              | W   | 0.079      | -            | -                | -                | -         |     0.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     4373 | 2024-03-05 | AMKAL             | L   | 0.073      | -            | -                | -                | -         |    -1.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     4431 | 2024-03-03 | Secret            | W   | 0.057      | -            | -                | -                | -         |     0.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     4451 | 2024-03-02 | Secret            | W   | 0.051      | -            | -                | -                | -         |     0.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     4477 | 2024-02-29 | Young Ninjas      | W   | 0.038      | -            | -                | -                | -         |     0.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,836.51)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-08-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-07-22 |      0.999 | $12,500.00     | $12,487.92      |
| 2024-06-10 |      0.720 | $2,000.00      | $1,440.32       |
| 2024-06-02 |      0.666 | $2,000.00      | $1,331.04       |
| 2024-05-22 |      0.593 | $25,000.00     | $14,813.66      |
| 2024-05-16 |      0.550 | $5,000.00      | $2,750.77       |
| 2024-05-04 |      0.472 | $2,000.00      | $944.92         |
| 2024-04-24 |      0.405 | $12,500.00     | $5,067.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
