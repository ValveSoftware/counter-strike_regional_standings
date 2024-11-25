### Roster Details<br />
Team Name: Apogee<br />
Roster: Demho, Prism, Qlocuu, swiz, virtuoso<br />
Global Rank: [109](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [80]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  857.4<br />
<br />
Final Rank Value (857.4) = Starting Rank Value (789.6) + Head To Head Adjustments (67.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.121[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 789.6
- 400 + ( ( 0.195 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 789.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      812 | 2024-10-18 | NewBALLS          | L   | 0.946      | -            | -                | -                | -         |   -25.44 | Demho, Prism, Qlocuu, swiz, virtuoso |
|           40 |      896 | 2024-10-14 | ECLOT             | L   | 0.921      | -            | -                | -                | -         |    -3.88 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           39 |      936 | 2024-10-11 | Insomnia          | L   | 0.901      | -            | -                | -                | -         |   -22.66 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           38 |      948 | 2024-10-10 | 500 Rush          | L   | 0.894      | -            | -                | -                | -         |   -25.59 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           37 |     1151 | 2024-10-04 | TSM               | L   | 0.852      | -            | -                | -                | -         |    -8.89 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           36 |     1182 | 2024-10-03 | Passion UA        | L   | 0.847      | -            | -                | -                | -         |    -7.08 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           35 |     1207 | 2024-10-02 | Betera            | W   | 0.842      | -            | -                | -                | 0 (0.000) |     3.60 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           34 |     1257 | 2024-10-01 | Rebels            | W   | 0.835      | 0.500        | 0.036 (0.015)    | 0.433 (0.181)    | 0 (0.000) |    15.36 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           33 |     1273 | 2024-10-01 | TSM               | W   | 0.833      | 0.371        | 0.041 (0.013)    | 0.616 (0.190)    | 0 (0.000) |    18.51 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           32 |     1324 | 2024-09-29 | ALTERNATE aTTaX   | W   | 0.819      | 0.371        | 0.070 (0.021)    | 0.729 (0.221)    | 0 (0.000) |    19.51 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           31 |     1351 | 2024-09-28 | 9z                | L   | 0.814      | -            | -                | -                | -         |    -3.91 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           30 |     1382 | 2024-09-27 | OG                | W   | 0.809      | 0.143        | 0.147 (0.017)    | -                | 0 (0.000) |    17.57 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           29 |     1397 | 2024-09-27 | SAW               | L   | 0.807      | -            | -                | -                | -         |    -0.39 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           28 |     1404 | 2024-09-27 | Verdant           | W   | 0.806      | -            | -                | -                | 0 (0.000) |     4.65 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           27 |     1432 | 2024-09-26 | ARCRED            | W   | 0.801      | 0.143        | 0.039 (0.005)    | -                | 0 (0.000) |    11.50 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           26 |     1440 | 2024-09-26 | Gaimin Gladiators | W   | 0.801      | 0.143        | -                | 0.713 (0.082)    | 0 (0.000) |    17.14 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           25 |     1542 | 2024-09-24 | Monte             | L   | 0.788      | -            | -                | -                | -         |    -4.22 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           24 |     1576 | 2024-09-23 | Illuminar         | W   | 0.782      | -            | -                | -                | 0 (0.000) |    16.07 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           23 |     1590 | 2024-09-23 | Johnny Speeds     | L   | 0.780      | -            | -                | -                | -         |    -3.45 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           22 |     1701 | 2024-09-19 | Verdant           | W   | 0.753      | 0.371        | 0.015 (0.004)    | 0.205 (0.057)    | 0 (0.000) |    12.97 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           21 |     1787 | 2024-09-16 | NAVI Junior       | L   | 0.732      | -            | -                | -                | -         |    -5.31 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           20 |     1810 | 2024-09-15 | L&G               | L   | 0.727      | -            | -                | -                | -         |   -12.81 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           19 |     1822 | 2024-09-15 | Astralis Talent   | W   | 0.726      | 0.333        | -                | 0.348 (0.084)    | -         |     8.55 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           18 |     1854 | 2024-09-14 | ENCE Academy      | W   | 0.719      | -            | -                | -                | -         |     8.38 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           17 |     1870 | 2024-09-13 | NAVI Junior       | L   | 0.714      | -            | -                | -                | -         |    -5.20 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           16 |     1879 | 2024-09-13 | UNiTY             | W   | 0.713      | 0.333        | 0.057 (0.014)    | 0.349 (0.083)    | -         |    16.89 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           15 |     1904 | 2024-09-12 | NAVI Junior       | L   | 0.707      | -            | -                | -                | -         |    -5.00 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           14 |     1941 | 2024-09-11 | Qiang             | W   | 0.700      | 0.500        | 0.009 (0.003)    | -                | -         |     7.34 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           13 |     1979 | 2024-09-10 | CPH Wolves        | W   | 0.692      | 0.333        | -                | 0.585 (0.135)    | -         |    12.08 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           12 |     2054 | 2024-09-06 | GUN5              | L   | 0.669      | -            | -                | -                | -         |    -4.39 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           11 |     2085 | 2024-09-05 | SovvyKiNG         | W   | 0.662      | 0.500        | -                | 0.315 (0.104)    | -         |     6.68 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           10 |     3137 | 2024-08-06 | SINNERS           | L   | 0.461      | -            | -                | -                | -         |    -1.38 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            9 |     3357 | 2024-07-31 | SAW               | L   | 0.421      | -            | -                | -                | -         |    -0.15 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            8 |     3627 | 2024-07-23 | Sangal            | L   | 0.367      | -            | -                | -                | -         |    -0.39 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            7 |     3858 | 2024-07-17 | RUSH B            | W   | 0.329      | 0.500        | 0.020 (0.003)    | -                | -         |     5.43 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            6 |     3974 | 2024-07-15 | Rebels            | W   | 0.314      | 0.500        | 0.036 (0.006)    | 0.433 (0.068)    | -         |     6.68 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            5 |     4710 | 2024-06-04 | The Prodigies     | L   | 0.041      | -            | -                | -                | -         |    -0.91 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            4 |     4742 | 2024-06-03 | Johnny Speeds     | L   | 0.034      | -            | -                | -                | -         |    -0.12 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            3 |     4767 | 2024-06-02 | Serbia            | L   | 0.027      | -            | -                | -                | -         |    -0.05 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            2 |     4858 | 2024-05-30 | ex-Enterprise     | W   | 0.006      | -            | -                | -                | -         |     0.13 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            1 |     4876 | 2024-05-29 | SINNERS           | L   | 0.001      | -            | -                | -                | -         |    -0.00 | POLO, Prism, Qlocuu, swiz, virtuoso  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,316.56)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-05 |      0.859 | $3,000.00      | $2,577.34       |
| 2024-09-17 |      0.739 | $1,000.00      | $739.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
