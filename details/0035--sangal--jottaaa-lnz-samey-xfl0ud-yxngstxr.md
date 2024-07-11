### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [35](../standings_global.md)<br />
Regional Rank: [25]( ../standings_europe.md)<br />
Final Rank Value:  1240.7<br />
<br />
Final Rank Value (1240.7) = Starting Rank Value (1175.3) + Head To Head Adjustments (65.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.611[<sup>1</sup>](#table2)
- Bounty Collected: 0.506[<sup>2</sup>](#table1)
- Opponent Network: 0.354[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.368<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1175.3
- 400 + ( ( 0.368 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1175.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |      367 | 2024-06-09 | KOI               | W   | 0.987      | -            | -                | -                | 0 (0.000) |    11.89 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           62 |      431 | 2024-06-08 | SINNERS           | W   | 0.981      | 0.500        | -                | 0.767 (0.376)    | 0 (0.000) |     7.83 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           61 |      496 | 2024-06-07 | Aurora            | W   | 0.974      | 0.500        | 0.518 (0.252)    | 0.853 (0.415)    | 0 (0.000) |    25.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           60 |      554 | 2024-06-06 | 3DMAX             | W   | 0.967      | 0.500        | 0.205 (0.099)    | 1.000 (0.484)    | 0 (0.000) |    16.31 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           59 |      617 | 2024-06-05 | SAW               | W   | 0.961      | 0.500        | 0.147 (0.071)    | -                | 0 (0.000) |    18.62 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           58 |      673 | 2024-06-04 | 9 Pandas          | W   | 0.953      | 0.500        | 0.125 (0.060)    | 0.625 (0.298)    | 0 (0.000) |    15.11 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           57 |      788 | 2024-05-31 | SAW               | L   | 0.926      | -            | -                | -                | -         |    -8.62 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           56 |      791 | 2024-05-31 | FAVBET            | W   | 0.926      | -            | -                | -                | 0 (0.000) |     4.04 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           55 |      796 | 2024-05-31 | fnatic            | L   | 0.926      | -            | -                | -                | -         |    -4.24 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           54 |      821 | 2024-05-30 | MOUZ NXT          | L   | 0.918      | -            | -                | -                | -         |   -15.95 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           53 |      993 | 2024-05-22 | Zero Tenacity     | W   | 0.867      | 0.500        | 0.153 (0.066)    | 1.000 (0.433)    | 0 (0.000) |    12.49 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           52 |     1040 | 2024-05-21 | Monte             | W   | 0.859      | 0.500        | 0.188 (0.081)    | 0.668 (0.287)    | 0 (0.000) |    18.11 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           51 |     1075 | 2024-05-20 | PARIVISION        | W   | 0.852      | -            | -                | -                | 0 (0.000) |     9.60 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           50 |     1091 | 2024-05-19 | Ninjas in Pyjamas | W   | 0.847      | 0.500        | 0.340 (0.144)    | -                | -         |    25.38 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           49 |     1097 | 2024-05-19 | Endpoint          | W   | 0.846      | -            | -                | -                | -         |     8.67 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           48 |     1133 | 2024-05-18 | Rare Atom         | W   | 0.839      | -            | -                | -                | -         |     2.22 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           47 |     1172 | 2024-05-17 | Permitta          | W   | 0.831      | 0.435        | -                | 0.837 (0.302)    | -         |     7.32 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           46 |     1192 | 2024-05-16 | Ninjas in Pyjamas | L   | 0.827      | -            | -                | -                | -         |    -0.91 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           45 |     1254 | 2024-05-15 | Verdant           | L   | 0.819      | -            | -                | -                | -         |   -20.75 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           44 |     1317 | 2024-05-14 | DMS               | L   | 0.811      | -            | -                | -                | -         |   -19.68 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           43 |     1563 | 2024-05-02 | Metizport         | L   | 0.733      | -            | -                | -                | -         |   -15.15 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           42 |     1596 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.725      | -            | -                | -                | -         |   -15.59 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           41 |     1608 | 2024-04-30 | Zero Tenacity     | W   | 0.719      | 0.500        | 0.153 (0.055)    | 1.000 (0.360)    | -         |     8.86 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           40 |     1638 | 2024-04-29 | SINNERS           | W   | 0.711      | 0.500        | -                | 0.767 (0.273)    | -         |     8.82 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |     1645 | 2024-04-28 | 1WIN              | W   | 0.707      | -            | -                | -                | -         |     7.10 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |     1670 | 2024-04-27 | PARIVISION        | L   | 0.700      | -            | -                | -                | -         |   -14.94 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |     1701 | 2024-04-26 | Nemiga            | W   | 0.692      | 0.435        | 0.498 (0.150)    | -                | -         |    15.37 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |     1774 | 2024-04-23 | Grannys Knockers  | W   | 0.671      | -            | -                | -                | -         |     2.76 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     1779 | 2024-04-22 | BLEED             | L   | 0.666      | -            | -                | -                | -         |    -4.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     1790 | 2024-04-22 | ex-Guild Eagles   | L   | 0.664      | -            | -                | -                | -         |   -16.05 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     1805 | 2024-04-21 | Alliance          | W   | 0.658      | -            | -                | -                | -         |     4.79 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     1821 | 2024-04-20 | brazylijski luz   | W   | 0.654      | -            | -                | -                | -         |     3.61 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     1840 | 2024-04-20 | JANO              | W   | 0.651      | -            | -                | -                | -         |     1.69 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     1865 | 2024-04-19 | TSM               | W   | 0.647      | -            | -                | -                | -         |     2.05 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     1871 | 2024-04-19 | Nemiga            | L   | 0.646      | -            | -                | -                | -         |    -6.46 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     1969 | 2024-04-17 | 9 Pandas          | W   | 0.632      | -            | -                | -                | -         |     8.65 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     1992 | 2024-04-16 | Zero Tenacity     | W   | 0.627      | -            | -                | -                | -         |     7.70 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     2012 | 2024-04-15 | B8                | W   | 0.621      | 0.500        | 0.242 (0.075)    | 1.000 (0.310)    | -         |     9.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     2015 | 2024-04-15 | Aurora Young Blud | W   | 0.619      | -            | -                | -                | -         |     2.26 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     2057 | 2024-04-12 | Monte             | L   | 0.600      | -            | -                | -                | -         |    -6.36 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2311 | 2024-04-04 | EYEBALLERS        | W   | 0.547      | -            | -                | -                | -         |     4.52 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     2390 | 2024-04-02 | 9 Pandas          | L   | 0.534      | -            | -                | -                | -         |    -8.57 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           21 |     2750 | 2024-03-13 | KOI               | L   | 0.401      | -            | -                | -                | -         |    -5.40 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           20 |     2855 | 2024-03-09 | Zero Tenacity     | L   | 0.373      | -            | -                | -                | -         |    -6.54 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           19 |     2907 | 2024-03-07 | 500               | L   | 0.360      | -            | -                | -                | -         |   -10.12 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           18 |     2929 | 2024-03-06 | TSM               | W   | 0.354      | -            | -                | -                | -         |     1.01 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           17 |     2998 | 2024-03-04 | Slovakia          | W   | 0.339      | -            | -                | -                | -         |     2.47 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           16 |     3024 | 2024-03-03 | Rebels            | L   | 0.333      | -            | -                | -                | -         |    -6.25 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           15 |     3050 | 2024-03-02 | HAVU              | W   | 0.325      | -            | -                | -                | -         |     1.01 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           14 |     3071 | 2024-02-29 | Rebels            | L   | 0.313      | -            | -                | -                | -         |    -6.02 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           13 |     3092 | 2024-02-28 | Alliance          | L   | 0.305      | -            | -                | -                | -         |    -7.71 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           12 |     3099 | 2024-02-27 | 9INE              | W   | 0.301      | -            | -                | -                | -         |     0.27 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           11 |     3145 | 2024-02-25 | Sashi             | W   | 0.287      | -            | -                | -                | -         |     4.32 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           10 |     3319 | 2024-02-18 | 500               | W   | 0.238      | -            | -                | -                | -         |     0.66 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            9 |     3526 | 2024-02-08 | AURA              | L   | 0.173      | -            | -                | -                | -         |    -5.29 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            8 |     3545 | 2024-02-06 | ex-Preasy         | L   | 0.159      | -            | -                | -                | -         |    -4.23 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            7 |     3579 | 2024-02-04 | ALTERNATE aTTaX   | W   | 0.145      | -            | -                | -                | -         |     1.61 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            6 |     3598 | 2024-02-03 | Entropiq          | L   | 0.140      | -            | -                | -                | -         |    -4.25 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            5 |     3608 | 2024-02-03 | Metizport         | L   | 0.138      | -            | -                | -                | -         |    -3.32 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            4 |     3660 | 2024-02-01 | Spirit Academy    | W   | 0.126      | -            | -                | -                | -         |     0.12 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            3 |     3668 | 2024-02-01 | ALTERNATE aTTaX   | W   | 0.125      | -            | -                | -                | -         |     1.39 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            2 |     3721 | 2024-01-28 | Gaimin Gladiators | L   | 0.099      | -            | -                | -                | -         |    -1.73 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            1 |     3785 | 2024-01-24 | Spirit Academy    | W   | 0.073      | -            | -                | -                | -         |     0.07 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,621.64)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $16,500.00     | $16,289.06      |
| 2024-05-22 |      0.867 | $50,000.00     | $43,332.58      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
