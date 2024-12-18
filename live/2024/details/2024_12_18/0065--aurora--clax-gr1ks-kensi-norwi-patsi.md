### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, gr1ks, KENSI, Norwi, Patsi<br />
Global Rank: [65](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [47]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1008.4<br />
<br />
Final Rank Value (1008.4) = Starting Rank Value (947.2) + Head To Head Adjustments (61.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.437[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.286<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 947.2
- 400 + ( ( 0.286 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 947.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      114 | 2024-12-11 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -11.36 | clax, gr1ks, KENSI, Norwi, Patsi |
|           31 |      131 | 2024-12-10 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -10.95 | clax, gr1ks, KENSI, Norwi, Patsi |
|           30 |      137 | 2024-12-09 | Sashi           | W   | 1.000      | 0.435        | 0.049 (0.021)    | 0.735 (0.319)    | 0 (0.000) |    18.43 | clax, gr1ks, KENSI, Norwi, Patsi |
|           29 |      492 | 2024-11-22 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |    -7.32 | clax, deko, KENSI, Lack1, Norwi  |
|           28 |      522 | 2024-11-21 | Spirit          | L   | 1.000      | -            | -                | -                | -         |    -0.23 | clax, deko, KENSI, Lack1, Norwi  |
|           27 |      535 | 2024-11-21 | B8              | W   | 1.000      | 0.143        | 0.156 (0.022)    | 0.697 (0.100)    | 1 (1.000) |    25.02 | clax, deko, KENSI, Lack1, Norwi  |
|           26 |      547 | 2024-11-20 | Eternal Fire    | L   | 1.000      | -            | -                | -                | -         |    -1.70 | clax, deko, KENSI, Lack1, Norwi  |
|           25 |      849 | 2024-11-08 | NAVI Junior     | L   | 0.932      | -            | -                | -                | -         |   -10.07 | clax, deko, KENSI, Lack1, Norwi  |
|           24 |      861 | 2024-11-07 | 9 Pandas        | W   | 0.927      | 0.426        | 0.098 (0.039)    | 0.871 (0.344)    | 0 (0.000) |    21.89 | clax, deko, KENSI, Lack1, Norwi  |
|           23 |      900 | 2024-11-05 | 9INE            | W   | 0.912      | 0.426        | 0.065 (0.025)    | 0.906 (0.352)    | 0 (0.000) |    15.84 | clax, deko, KENSI, Lack1, Norwi  |
|           22 |     1137 | 2024-10-24 | M80             | L   | 0.833      | -            | -                | -                | -         |    -5.02 | clax, deko, KENSI, Lack1, Norwi  |
|           21 |     1145 | 2024-10-24 | BIG             | L   | 0.831      | -            | -                | -                | -         |    -2.60 | clax, deko, KENSI, Lack1, Norwi  |
|           20 |     1280 | 2024-10-17 | Nemiga          | L   | 0.785      | -            | -                | -                | -         |    -4.17 | clax, deko, KENSI, Lack1, Norwi  |
|           19 |     1312 | 2024-10-16 | Fluxo           | L   | 0.778      | -            | -                | -                | -         |    -5.93 | clax, deko, KENSI, Lack1, Norwi  |
|           18 |     1325 | 2024-10-15 | PARIVISION      | L   | 0.774      | -            | -                | -                | -         |   -11.59 | clax, deko, KENSI, Lack1, Norwi  |
|           17 |     1347 | 2024-10-13 | FAVBET          | L   | 0.759      | -            | -                | -                | -         |   -13.71 | clax, deko, KENSI, Lack1, Norwi  |
|           16 |     1368 | 2024-10-12 | Metizport       | W   | 0.752      | 0.435        | 0.128 (0.042)    | 0.843 (0.275)    | 0 (0.000) |    18.97 | clax, deko, KENSI, Lack1, Norwi  |
|           15 |     1395 | 2024-10-10 | Zero Tenacity   | W   | 0.738      | 0.435        | 0.079 (0.025)    | 0.706 (0.226)    | 0 (0.000) |    16.11 | clax, deko, KENSI, Lack1, Norwi  |
|           14 |     1585 | 2024-10-04 | Passion UA      | L   | 0.699      | -            | -                | -                | -         |    -6.38 | clax, deko, KENSI, Lack1, Norwi  |
|           13 |     1789 | 2024-09-28 | GamerLegion     | L   | 0.660      | -            | -                | -                | -         |    -3.11 | clax, deko, KENSI, Lack1, Norwi  |
|           12 |     1831 | 2024-09-27 | ECSTATIC        | W   | 0.653      | 0.435        | 0.061 (0.017)    | 1.000 (0.284)    | 0 (0.000) |    11.48 | clax, deko, KENSI, Lack1, Norwi  |
|           11 |     1876 | 2024-09-26 | 3DMAX           | L   | 0.647      | -            | -                | -                | -         |    -1.26 | clax, deko, KENSI, Lack1, Norwi  |
|           10 |     1888 | 2024-09-26 | Into the Breach | W   | 0.646      | 0.384        | -                | 0.617 (0.153)    | 0 (0.000) |    10.61 | clax, deko, KENSI, Lack1, Norwi  |
|            9 |     1926 | 2024-09-25 | Endpoint        | W   | 0.640      | 0.435        | 0.035 (0.010)    | 0.631 (0.176)    | 0 (0.000) |     9.24 | clax, deko, KENSI, Lack1, Norwi  |
|            8 |     1977 | 2024-09-24 | AMKAL           | W   | 0.634      | 0.384        | 0.028 (0.007)    | -                | 0 (0.000) |     8.30 | clax, deko, KENSI, Lack1, Norwi  |
|            7 |     2686 | 2024-08-30 | Monte           | L   | 0.467      | -            | -                | -                | -         |    -5.10 | deko, gr1ks, KENSI, Lack1, Norwi |
|            6 |     2692 | 2024-08-30 | Sashi           | W   | 0.466      | 0.143        | 0.049 (0.003)    | 0.735 (0.049)    | -         |     9.02 | deko, gr1ks, KENSI, Lack1, Norwi |
|            5 |     2718 | 2024-08-29 | GenOne          | W   | 0.461      | -            | -                | -                | -         |     4.00 | deko, gr1ks, KENSI, Lack1, Norwi |
|            4 |     2733 | 2024-08-29 | GamerLegion     | L   | 0.459      | -            | -                | -                | -         |    -1.35 | deko, gr1ks, KENSI, Lack1, Norwi |
|            3 |     2925 | 2024-08-26 | FURIA           | L   | 0.439      | -            | -                | -                | -         |    -0.35 | clax, deko, KENSI, Lack1, Norwi  |
|            2 |     2964 | 2024-08-25 | Eternal Fire    | L   | 0.433      | -            | -                | -                | -         |    -0.71 | clax, deko, KENSI, Lack1, Norwi  |
|            1 |     3182 | 2024-08-19 | Sashi           | L   | 0.393      | -            | -                | -                | -         |    -4.76 | clax, deko, KENSI, Lack1, Norwi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,691.91)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.940 | $5,000.00      | $4,697.76       |
| 2024-10-20 |      0.806 | $4,500.00      | $3,627.79       |
| 2024-10-13 |      0.760 | $5,000.00      | $3,802.10       |
| 2024-09-28 |      0.660 | $5,000.00      | $3,301.21       |
| 2024-09-26 |      0.647 | $3,500.00      | $2,263.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
