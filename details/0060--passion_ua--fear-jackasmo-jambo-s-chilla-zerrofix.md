### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [60](../standings_global.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
Final Rank Value:  1063.6<br />
<br />
Final Rank Value (1063.6) = Starting Rank Value (1040.8) + Head To Head Adjustments (22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.484[<sup>1</sup>](#table2)
- Bounty Collected: 0.432[<sup>2</sup>](#table1)
- Opponent Network: 0.345[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.315<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1040.8
- 400 + ( ( 0.315 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1040.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |      108 | 2024-06-14 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -9.21 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           69 |      198 | 2024-06-10 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.01 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           68 |      311 | 2024-06-08 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -13.31 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           67 |      371 | 2024-06-07 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.83 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           66 |      389 | 2024-06-07 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.67 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           65 |      448 | 2024-06-06 | ex-iNation        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.77 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           64 |      511 | 2024-06-05 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -22.86 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           63 |      540 | 2024-06-04 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.10 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           62 |      545 | 2024-06-04 | ex-iNation        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           61 |      600 | 2024-06-02 | UNiTY             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           60 |      661 | 2024-05-31 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -12.54 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           59 |      681 | 2024-05-30 | Zero Tenacity     | W   | 1.000      | 0.371        | 0.153 (0.057)    | 1.000 (0.371)    | 0 (0.000) |    19.23 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           58 |      712 | 2024-05-29 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           57 |      783 | 2024-05-25 | Sampi             | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.837 (0.364)    | 0 (0.000) |    12.86 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           56 |      804 | 2024-05-24 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -1.86 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           55 |      809 | 2024-05-24 | ECSTATIC          | W   | 1.000      | -            | -                | -                | -         |     0.87 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           54 |      825 | 2024-05-23 | SINNERS           | W   | 1.000      | 0.435        | -                | 0.782 (0.340)    | -         |    17.05 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           53 |      946 | 2024-05-20 | Permitta          | W   | 1.000      | 0.435        | -                | 0.885 (0.385)    | -         |    11.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           52 |      960 | 2024-05-19 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -5.61 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           51 |      969 | 2024-05-19 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.046 (0.020)    | -                | -         |    13.67 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           50 |      989 | 2024-05-18 | 9 Pandas          | L   | 0.995      | -            | -                | -                | -         |    -9.69 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           49 |     1034 | 2024-05-17 | Nexus             | W   | 0.988      | -            | -                | -                | -         |     8.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           48 |     1074 | 2024-05-16 | Sashi             | W   | 0.981      | 0.500        | 0.200 (0.098)    | 1.000 (0.490)    | -         |    26.05 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           47 |     1114 | 2024-05-15 | Endpoint          | L   | 0.975      | -            | -                | -                | -         |   -15.21 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           46 |     1169 | 2024-05-14 | SINNERS           | L   | 0.969      | -            | -                | -                | -         |   -12.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           45 |     1261 | 2024-05-11 | Preasy            | W   | 0.947      | -            | -                | -                | -         |     6.63 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           44 |     1424 | 2024-05-02 | Nemiga            | L   | 0.889      | -            | -                | -                | -         |    -4.71 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           43 |     1450 | 2024-05-01 | PARIVISION        | W   | 0.882      | -            | -                | -                | -         |    15.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           42 |     1485 | 2024-04-30 | 9 Pandas          | W   | 0.874      | 0.500        | 0.114 (0.050)    | 0.663 (0.290)    | -         |    18.03 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           41 |     1512 | 2024-04-28 | ALTERNATE aTTaX   | L   | 0.862      | -            | -                | -                | -         |   -12.91 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           40 |     1562 | 2024-04-26 | 9 Pandas          | W   | 0.849      | 0.500        | 0.114 (0.048)    | 0.663 (0.281)    | -         |    17.67 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           39 |     1598 | 2024-04-25 | Sashi             | L   | 0.841      | -            | -                | -                | -         |    -4.89 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           38 |     1610 | 2024-04-24 | Permitta          | L   | 0.835      | -            | -                | -                | -         |   -11.92 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           37 |     1642 | 2024-04-22 | B8                | L   | 0.823      | -            | -                | -                | -         |    -9.64 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           36 |     1684 | 2024-04-20 | Young Ninjas      | W   | 0.810      | -            | -                | -                | -         |     9.10 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           35 |     1704 | 2024-04-20 | Permitta          | L   | 0.807      | -            | -                | -                | -         |   -12.45 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           34 |     1741 | 2024-04-19 | ALTERNATE aTTaX   | L   | 0.802      | -            | -                | -                | -         |   -13.80 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           33 |     1793 | 2024-04-18 | Permitta          | W   | 0.795      | 0.500        | -                | 0.885 (0.352)    | -         |    12.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           32 |     1826 | 2024-04-17 | Sashi             | W   | 0.788      | 0.371        | 0.200 (0.058)    | 1.000 (0.292)    | -         |    16.53 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           31 |     1860 | 2024-04-16 | 500               | L   | 0.783      | -            | -                | -                | -         |   -17.00 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           30 |     1899 | 2024-04-14 | SINNERS           | L   | 0.768      | -            | -                | -                | -         |    -6.89 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           29 |     1954 | 2024-04-11 | 3DMAX             | W   | 0.748      | 0.384        | 0.186 (0.053)    | 1.000 (0.288)    | -         |    18.59 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           28 |     2001 | 2024-04-10 | Sashi             | W   | 0.741      | 0.371        | 0.200 (0.055)    | -                | -         |    16.13 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           27 |     2188 | 2024-04-04 | HAVU              | W   | 0.701      | -            | -                | -                | -         |     5.42 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           26 |     2260 | 2024-04-02 | BLEED             | L   | 0.689      | -            | -                | -                | -         |    -2.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           25 |     2290 | 2024-03-31 | FAVBET            | L   | 0.675      | -            | -                | -                | -         |   -15.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           24 |     2297 | 2024-03-30 | Lazer Cats        | W   | 0.667      | -            | -                | -                | -         |     1.47 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           23 |     2305 | 2024-03-29 | NAVI Junior       | L   | 0.662      | -            | -                | -                | -         |   -16.95 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           22 |     2324 | 2024-03-28 | GL Academy        | L   | 0.654      | -            | -                | -                | -         |   -16.11 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           21 |     2534 | 2024-03-17 | Sampi             | L   | 0.580      | -            | -                | -                | -         |   -10.11 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           20 |     2543 | 2024-03-16 | ex-Preasy         | L   | 0.575      | -            | -                | -                | -         |   -10.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           19 |     2596 | 2024-03-14 | Sampi             | W   | 0.561      | -            | -                | -                | -         |     7.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           18 |     2663 | 2024-03-12 | Alliance          | W   | 0.548      | -            | -                | -                | -         |     6.42 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           17 |     2685 | 2024-03-11 | MOUZ NXT          | L   | 0.541      | -            | -                | -                | -         |    -6.63 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           16 |     2704 | 2024-03-10 | MOUZ NXT          | W   | 0.535      | 0.303        | 0.158 (0.026)    | -                | -         |    10.53 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           15 |     2717 | 2024-03-09 | The Chosen Few    | L   | 0.529      | -            | -                | -                | -         |   -14.14 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           14 |     2745 | 2024-03-08 | Spirit Academy    | L   | 0.522      | -            | -                | -                | -         |   -14.24 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           13 |     2749 | 2024-03-08 | Entropiq          | W   | 0.522      | -            | -                | -                | -         |     1.58 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           12 |     2768 | 2024-03-07 | AURA              | W   | 0.516      | -            | -                | -                | -         |     0.90 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           11 |     2806 | 2024-03-06 | Permitta          | L   | 0.508      | -            | -                | -                | -         |    -9.45 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           10 |     2808 | 2024-03-06 | Fraud5            | W   | 0.508      | -            | -                | -                | -         |     2.16 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            9 |     2837 | 2024-03-05 | B8                | L   | 0.502      | -            | -                | -                | -         |    -5.59 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            8 |     2864 | 2024-03-04 | ALTERNATE aTTaX   | W   | 0.494      | -            | -                | -                | -         |     6.81 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            7 |     3395 | 2024-02-08 | BLEED             | L   | 0.328      | -            | -                | -                | -         |    -1.51 | jackasmo, jambo, marat2k, s-chilla, Zinchenko |
|            6 |     3576 | 2024-01-29 | Alliance          | W   | 0.262      | -            | -                | -                | -         |     2.50 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            5 |     3903 | 2024-01-18 | MOUZ NXT          | L   | 0.187      | -            | -                | -                | -         |    -2.41 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            4 |     3957 | 2024-01-16 | Zero Tenacity     | L   | 0.178      | -            | -                | -                | -         |    -2.29 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            3 |     3973 | 2024-01-16 | Rebels            | W   | 0.177      | -            | -                | -                | -         |     3.27 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            2 |     3992 | 2024-01-16 | RUBY              | W   | 0.176      | -            | -                | -                | -         |     2.31 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            1 |     4126 | 2024-01-12 | OG                | L   | 0.150      | -            | -                | -                | -         |    -1.43 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,875.39)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-06 |      1.000 | $11,000.00     | $11,000.00      |
| 2024-05-03 |      0.895 | $12,500.00     | $11,190.20      |
| 2024-03-31 |      0.675 | $657.00        | $443.55         |
| 2024-03-30 |      0.668 | $1,000.00      | $667.76         |
| 2024-03-18 |      0.587 | $3,000.00      | $1,761.82       |
| 2024-03-11 |      0.541 | $1,500.00      | $812.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
