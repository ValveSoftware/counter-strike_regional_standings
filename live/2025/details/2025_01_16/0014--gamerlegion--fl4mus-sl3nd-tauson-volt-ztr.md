### Roster Details<br />
Team Name: GamerLegion<br />
Roster: FL4MUS, sl3nd, Tauson, volt, ztr<br />
Global Rank: [14](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1370.3<br />
<br />
Final Rank Value (1370.3) = Starting Rank Value (1396.7) + Head To Head Adjustments (-26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.588[<sup>1</sup>](#table2)
- Bounty Collected: 0.425[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.828[<sup>2</sup>](#table1)

The average of these factors is 0.503<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1396.7
- 400 + ( ( 0.503 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1396.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      364 | 2024-12-06 | Natus Vincere     | L   | 0.929      | -            | -                | -                | -         |    -3.28 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           51 |      390 | 2024-12-05 | Wildcard          | W   | 0.922      | 1.000        | 0.230 (0.212)    | 0.636 (0.586)    | 1 (0.922) |    13.65 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           50 |      418 | 2024-12-05 | Liquid            | L   | 0.916      | -            | -                | -                | -         |    -5.62 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           49 |      427 | 2024-12-04 | Vitality          | L   | 0.915      | -            | -                | -                | -         |    -2.14 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           48 |      479 | 2024-12-02 | Passion UA        | W   | 0.897      | 0.143        | 0.110 (0.014)    | 0.833 (0.107)    | 1 (0.897) |     7.55 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           47 |      497 | 2024-12-01 | The MongolZ       | L   | 0.890      | -            | -                | -                | -         |    -1.97 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           46 |      523 | 2024-11-30 | paiN              | W   | 0.884      | 0.143        | 0.257 (0.032)    | -                | 1 (0.884) |    17.34 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           45 |      538 | 2024-11-29 | FURIA             | W   | 0.881      | 0.143        | 0.201 (0.025)    | -                | 1 (0.881) |    21.81 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           44 |      722 | 2024-11-20 | BetBoom           | W   | 0.818      | -            | -                | -                | 1 (0.818) |     7.38 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           43 |      723 | 2024-11-20 | SINNERS           | W   | 0.817      | -            | -                | -                | 1 (0.817) |     5.70 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           42 |      734 | 2024-11-19 | Falcons           | W   | 0.810      | -            | -                | -                | 1 (0.810) |     4.16 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           41 |      745 | 2024-11-18 | UNiTY             | W   | 0.804      | -            | -                | -                | 1 (0.804) |     2.62 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           40 |      770 | 2024-11-17 | ECLOT             | L   | 0.796      | -            | -                | -                | -         |   -16.73 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           39 |      778 | 2024-11-16 | Vitality          | L   | 0.795      | -            | -                | -                | -         |    -1.59 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           38 |     1543 | 2024-10-11 | GUN5              | L   | 0.552      | -            | -                | -                | -         |   -13.66 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           37 |     1668 | 2024-10-06 | Passion UA        | W   | 0.519      | 0.435        | 0.110 (0.025)    | 0.833 (0.188)    | 0 (0.000) |     4.75 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           36 |     1673 | 2024-10-06 | 9 Pandas          | W   | 0.518      | 0.435        | 0.159 (0.036)    | 0.801 (0.180)    | 0 (0.000) |     3.84 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           35 |     1700 | 2024-10-05 | B8                | W   | 0.512      | 0.435        | 0.164 (0.037)    | 0.504 (0.112)    | -         |     4.66 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           34 |     1738 | 2024-10-04 | DRILLAS           | W   | 0.506      | -            | -                | -                | -         |     1.09 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           33 |     1951 | 2024-09-28 | BetBoom           | L   | 0.465      | -            | -                | -                | -         |   -11.20 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           32 |     1955 | 2024-09-28 | Aurora            | W   | 0.465      | -            | -                | -                | -         |     1.67 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           31 |     2007 | 2024-09-27 | B8                | W   | 0.457      | 0.435        | 0.164 (0.033)    | 0.504 (0.100)    | -         |     3.65 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           30 |     2033 | 2024-09-26 | CPH Wolves        | W   | 0.452      | -            | -                | -                | -         |     0.80 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           29 |     2401 | 2024-09-15 | SINNERS           | L   | 0.379      | -            | -                | -                | -         |    -9.39 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           28 |     2421 | 2024-09-15 | Gaimin Gladiators | W   | 0.377      | 0.435        | -                | 0.873 (0.143)    | -         |     1.36 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           27 |     2442 | 2024-09-14 | Zero Tenacity     | W   | 0.371      | 0.435        | 0.084 (0.013)    | 0.572 (0.092)    | -         |     2.24 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           26 |     2491 | 2024-09-13 | Monte Gen         | W   | 0.363      | -            | -                | -                | -         |     0.73 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           25 |     2577 | 2024-09-10 | Sashi             | L   | 0.344      | -            | -                | -                | -         |    -9.36 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           24 |     2607 | 2024-09-08 | B8                | L   | 0.332      | -            | -                | -                | -         |    -7.99 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           23 |     2618 | 2024-09-08 | Passion UA        | W   | 0.330      | 0.435        | 0.110 (0.016)    | 0.833 (0.119)    | -         |     2.77 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           22 |     2655 | 2024-09-07 | Monte             | W   | 0.323      | 0.435        | -                | 0.583 (0.082)    | -         |     1.49 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           21 |     2670 | 2024-09-06 | Endpoint          | W   | 0.318      | -            | -                | -                | -         |     0.68 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           20 |     2724 | 2024-09-05 | Into the Breach   | L   | 0.309      | -            | -                | -                | -         |    -9.07 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           19 |     2810 | 2024-09-02 | Cloud9            | L   | 0.290      | -            | -                | -                | -         |    -7.63 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           18 |     2859 | 2024-08-30 | Monte             | L   | 0.271      | -            | -                | -                | -         |    -7.42 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           17 |     2885 | 2024-08-29 | SAW               | L   | 0.266      | -            | -                | -                | -         |    -4.32 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           16 |     2899 | 2024-08-29 | Aurora            | W   | 0.264      | -            | -                | -                | -         |     0.67 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           15 |     3082 | 2024-08-26 | SINNERS           | L   | 0.245      | -            | -                | -                | -         |    -6.21 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           14 |     3101 | 2024-08-26 | EYEBALLERS        | W   | 0.243      | -            | -                | -                | -         |     0.39 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           13 |     3169 | 2024-08-23 | BIG               | L   | 0.226      | -            | -                | -                | -         |    -3.44 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           12 |     3172 | 2024-08-23 | UNPAID            | W   | 0.225      | -            | -                | -                | -         |     0.78 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           11 |     3183 | 2024-08-23 | PARIVISION        | L   | 0.224      | -            | -                | -                | -         |    -6.63 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           10 |     3218 | 2024-08-22 | BC.Game           | W   | 0.217      | -            | -                | -                | -         |     0.39 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            9 |     3259 | 2024-08-21 | TSM               | W   | 0.211      | -            | -                | -                | -         |     0.39 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            8 |     3283 | 2024-08-21 | Rhyno             | L   | 0.210      | -            | -                | -                | -         |    -6.43 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            7 |     3372 | 2024-08-18 | SINNERS           | L   | 0.190      | -            | -                | -                | -         |    -4.98 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            6 |     3389 | 2024-08-17 | SINNERS           | W   | 0.185      | -            | -                | -                | -         |     0.98 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            5 |     3392 | 2024-08-17 | 1WIN              | W   | 0.185      | -            | -                | -                | -         |     0.10 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            4 |     3404 | 2024-08-17 | Zero Tenacity     | W   | 0.183      | -            | -                | -                | -         |     0.67 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            3 |     3434 | 2024-08-15 | Aurora Young Blud | W   | 0.173      | -            | -                | -                | -         |     0.41 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            2 |     4000 | 2024-07-30 | Falcons           | L   | 0.065      | -            | -                | -                | -         |    -1.89 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            1 |     4036 | 2024-07-29 | Vitality          | L   | 0.058      | -            | -                | -                | -         |    -0.17 | aNdu, FL4MUS, sl3nd, volt, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,500.77)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.984 | $20,000.00     | $19,670.26      |
| 2024-10-06 |      0.519 | $22,000.00     | $11,423.97      |
| 2024-09-28 |      0.465 | $10,000.00     | $4,654.26       |
| 2024-09-15 |      0.379 | $10,000.00     | $3,787.90       |
| 2024-09-08 |      0.332 | $10,000.00     | $3,319.91       |
| 2024-08-25 |      0.239 | $5,000.00      | $1,195.17       |
| 2024-08-18 |      0.192 | $5,000.00      | $959.30         |
| 2024-08-04 |      0.098 | $5,000.00      | $489.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
