### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [71](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [52]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  980.9<br />
<br />
Final Rank Value (980.9) = Starting Rank Value (932.0) + Head To Head Adjustments (48.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.191[<sup>2</sup>](#table1)
- LAN Wins: 0.128[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 932.0
- 400 + ( ( 0.278 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 932.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      517 | 2024-11-22 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -18.09 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |      537 | 2024-11-21 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -11.19 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      545 | 2024-11-20 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -0.76 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |      870 | 2024-11-07 | Nemiga            | L   | 0.925      | -            | -                | -                | -         |    -5.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |      876 | 2024-11-06 | SINNERS           | W   | 0.920      | 0.426        | 0.082 (0.032)    | 0.826 (0.324)    | 0 (0.000) |    17.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     1246 | 2024-10-18 | UNPAID            | L   | 0.793      | -            | -                | -                | -         |   -11.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     1266 | 2024-10-17 | fnatic            | L   | 0.787      | -            | -                | -                | -         |    -7.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     1294 | 2024-10-16 | Sashi             | L   | 0.781      | -            | -                | -                | -         |   -11.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     1301 | 2024-10-16 | Solid             | W   | 0.780      | 0.624        | 0.027 (0.013)    | 0.574 (0.279)    | 1 (0.780) |    10.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     1325 | 2024-10-15 | Aurora            | W   | 0.774      | 0.500        | 0.051 (0.020)    | 0.345 (0.134)    | 0 (0.000) |    11.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     1553 | 2024-10-05 | 3DMAX             | L   | 0.705      | -            | -                | -                | -         |    -1.91 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1626 | 2024-10-03 | Spirit Academy    | W   | 0.692      | 0.435        | 0.129 (0.039)    | 0.999 (0.300)    | 0 (0.000) |    12.31 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2031 | 2024-09-23 | Monte             | L   | 0.625      | -            | -                | -                | -         |    -8.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2337 | 2024-09-12 | GUN5              | L   | 0.554      | -            | -                | -                | -         |    -7.20 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2385 | 2024-09-11 | 9INE              | W   | 0.545      | 0.384        | 0.065 (0.014)    | 0.906 (0.190)    | 0 (0.000) |     8.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2587 | 2024-09-04 | Monte             | W   | 0.499      | 0.384        | 0.065 (0.012)    | 0.736 (0.141)    | 0 (0.000) |     9.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2739 | 2024-08-29 | AMKAL             | W   | 0.459      | -            | -                | -                | 0 (0.000) |     4.46 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2853 | 2024-08-27 | Gaimin Gladiators | L   | 0.445      | -            | -                | -                | -         |    -8.37 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     2958 | 2024-08-25 | Monte Gen         | L   | 0.434      | -            | -                | -                | -         |    -9.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     3017 | 2024-08-23 | GamerLegion       | W   | 0.419      | -            | -                | -                | 0 (0.000) |    11.72 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3053 | 2024-08-22 | B8                | W   | 0.411      | -            | -                | -                | -         |     9.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3085 | 2024-08-21 | SINNERS           | L   | 0.406      | -            | -                | -                | -         |    -3.69 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3108 | 2024-08-21 | ex-Enterprise     | W   | 0.405      | -            | -                | -                | -         |     4.91 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3148 | 2024-08-20 | 9 Pandas          | W   | 0.400      | 0.500        | 0.098 (0.020)    | 0.871 (0.174)    | -         |     9.00 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3179 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.393      | -            | -                | -                | -         |    -3.17 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3275 | 2024-08-15 | OG                | L   | 0.367      | -            | -                | -                | -         |    -6.23 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3283 | 2024-08-15 | 9INE              | W   | 0.366      | -            | -                | -                | -         |     5.68 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3291 | 2024-08-15 | Metizport         | W   | 0.365      | -            | -                | -                | -         |    10.20 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3329 | 2024-08-13 | RUSH B            | W   | 0.354      | -            | -                | -                | -         |     4.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3374 | 2024-08-12 | Monte             | W   | 0.348      | 0.500        | -                | 0.736 (0.128)    | -         |     6.71 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3459 | 2024-08-09 | 3DMAX             | L   | 0.327      | -            | -                | -                | -         |    -0.53 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3540 | 2024-08-07 | SINNERS           | W   | 0.312      | -            | -                | -                | -         |     7.18 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3572 | 2024-08-06 | Sangal            | L   | 0.307      | -            | -                | -                | -         |    -1.30 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3586 | 2024-08-06 | Aurora Young Blud | W   | 0.305      | 0.435        | -                | 0.927 (0.123)    | -         |     4.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3604 | 2024-08-05 | ENCE              | W   | 0.299      | 0.435        | 0.296 (0.038)    | -                | -         |     7.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3627 | 2024-08-04 | Betera            | L   | 0.294      | -            | -                | -                | -         |    -7.50 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3668 | 2024-08-03 | GUN5              | L   | 0.287      | -            | -                | -                | -         |    -3.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     3685 | 2024-08-03 | CYBERSHOKE        | W   | 0.285      | -            | -                | -                | -         |     3.52 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     3695 | 2024-08-02 | TSM               | W   | 0.280      | -            | -                | -                | -         |     4.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     3736 | 2024-08-01 | 9 Pandas          | W   | 0.274      | 0.500        | 0.098 (0.013)    | 0.871 (0.119)    | -         |     6.37 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     3849 | 2024-07-30 | los kogutos       | W   | 0.258      | -            | -                | -                | -         |     6.80 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     3951 | 2024-07-26 | UNPAID            | L   | 0.233      | -            | -                | -                | -         |    -2.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     3966 | 2024-07-26 | True Rippers      | W   | 0.231      | -            | -                | -                | 1 (0.231) |     0.94 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     3997 | 2024-07-25 | ENCE              | L   | 0.225      | -            | -                | -                | -         |    -1.10 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     4035 | 2024-07-24 | The MongolZ       | W   | 0.218      | 0.650        | 1.000 (0.142)    | -                | 1 (0.218) |     6.85 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     4041 | 2024-07-24 | Aurora            | L   | 0.217      | -            | -                | -                | -         |    -4.50 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,849.06)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.806 | $5,000.00      | $4,030.88       |
| 2024-10-06 |      0.714 | $2,000.00      | $1,428.17       |
| 2024-09-26 |      0.647 | $500.00        | $323.29         |
| 2024-08-06 |      0.307 | $10,000.00     | $3,066.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
