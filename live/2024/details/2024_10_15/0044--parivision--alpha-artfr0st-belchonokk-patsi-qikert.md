### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [44](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [30]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  1057.8<br />
<br />
Final Rank Value (1057.8) = Starting Rank Value (1009.5) + Head To Head Adjustments (48.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.416[<sup>1</sup>](#table2)
- Bounty Collected: 0.437[<sup>2</sup>](#table1)
- Opponent Network: 0.263[<sup>2</sup>](#table1)
- LAN Wins: 0.139[<sup>2</sup>](#table1)

The average of these factors is 0.314<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1009.5
- 400 + ( ( 0.314 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1009.5


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
|           63 |      226 | 2024-10-05 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.12 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           62 |      299 | 2024-10-03 | Spirit Academy    | W   | 1.000      | 0.435        | 0.101 (0.044)    | 0.800 (0.348)    | 0 (0.000) |    15.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           61 |      704 | 2024-09-23 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -16.70 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           60 |     1010 | 2024-09-12 | GUN5              | L   | 0.981      | -            | -                | -                | -         |   -15.88 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           59 |     1058 | 2024-09-11 | 9INE              | W   | 0.973      | 0.384        | 0.095 (0.035)    | 0.686 (0.256)    | 0 (0.000) |    10.91 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           58 |     1260 | 2024-09-04 | Monte             | W   | 0.926      | 0.384        | -                | 0.822 (0.293)    | 0 (0.000) |    12.73 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           57 |     1412 | 2024-08-29 | AMKAL             | W   | 0.886      | 0.384        | 0.076 (0.026)    | -                | 0 (0.000) |    10.06 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           56 |     1526 | 2024-08-27 | Gaimin Gladiators | L   | 0.873      | -            | -                | -                | -         |   -20.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           55 |     1631 | 2024-08-25 | Monte Gen         | L   | 0.862      | -            | -                | -                | -         |   -19.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           54 |     1690 | 2024-08-23 | GamerLegion       | W   | 0.847      | 0.143        | 0.250 (0.030)    | -                | 0 (0.000) |    14.15 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           53 |     1726 | 2024-08-22 | B8                | W   | 0.839      | 0.143        | 0.179 (0.021)    | -                | 0 (0.000) |    14.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           52 |     1758 | 2024-08-21 | SINNERS           | L   | 0.834      | -            | -                | -                | -         |   -10.39 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           51 |     1781 | 2024-08-21 | ex-Enterprise     | W   | 0.833      | -            | -                | -                | 0 (0.000) |     7.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           50 |     1821 | 2024-08-20 | 9 Pandas          | W   | 0.827      | 0.500        | 0.057 (0.024)    | 0.677 (0.280)    | 0 (0.000) |    13.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           49 |     1852 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.821      | -            | -                | -                | -         |    -6.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           48 |     1948 | 2024-08-15 | OG                | L   | 0.794      | -            | -                | -                | -         |   -18.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           47 |     1956 | 2024-08-15 | 9INE              | W   | 0.794      | -            | -                | -                | -         |     8.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           46 |     1964 | 2024-08-15 | Metizport         | W   | 0.792      | -            | -                | -                | -         |     8.85 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |     2002 | 2024-08-13 | RUSH B            | W   | 0.781      | -            | -                | -                | -         |     6.68 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |     2047 | 2024-08-12 | Monte             | W   | 0.775      | 0.500        | -                | 0.822 (0.319)    | -         |     9.97 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     2132 | 2024-08-09 | 3DMAX             | L   | 0.754      | -            | -                | -                | -         |    -2.65 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     2213 | 2024-08-07 | SINNERS           | W   | 0.739      | -            | -                | -                | -         |    13.76 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     2245 | 2024-08-06 | Sangal            | L   | 0.734      | -            | -                | -                | -         |    -4.38 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     2259 | 2024-08-06 | Aurora Young Blud | W   | 0.733      | 0.435        | -                | 0.550 (0.175)    | -         |     8.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     2277 | 2024-08-05 | ENCE              | W   | 0.727      | 0.435        | 0.084 (0.026)    | -                | -         |    13.20 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     2300 | 2024-08-04 | Betera            | L   | 0.721      | -            | -                | -                | -         |   -20.60 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     2341 | 2024-08-03 | GUN5              | L   | 0.714      | -            | -                | -                | -         |   -15.24 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     2358 | 2024-08-03 | CYBERSHOKE        | W   | 0.712      | 0.435        | -                | 0.774 (0.239)    | -         |     8.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     2368 | 2024-08-02 | TSM               | W   | 0.708      | 0.500        | 0.062 (0.022)    | 0.788 (0.279)    | -         |     9.23 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2409 | 2024-08-01 | 9 Pandas          | W   | 0.701      | 0.500        | 0.057 (0.020)    | 0.677 (0.237)    | -         |    10.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2522 | 2024-07-30 | Permitta          | W   | 0.686      | -            | -                | -                | -         |     8.05 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2624 | 2024-07-26 | BLEED             | L   | 0.661      | -            | -                | -                | -         |    -7.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2639 | 2024-07-26 | True Rippers      | W   | 0.659      | -            | -                | -                | 1 (0.659) |     2.38 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2670 | 2024-07-25 | ENCE              | L   | 0.653      | -            | -                | -                | -         |    -9.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2708 | 2024-07-24 | The MongolZ       | W   | 0.646      | 0.650        | 0.631 (0.265)    | 0.488 (0.205)    | 1 (0.646) |    19.85 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     2714 | 2024-07-24 | Aurora            | L   | 0.645      | -            | -                | -                | -         |    -4.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     3388 | 2024-06-14 | Permitta          | L   | 0.379      | -            | -                | -                | -         |    -7.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     3490 | 2024-06-10 | RUSH B            | W   | 0.353      | -            | -                | -                | -         |     3.12 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     3495 | 2024-06-10 | 3DMAX             | L   | 0.353      | -            | -                | -                | -         |    -0.85 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     3501 | 2024-06-10 | SINNERS           | L   | 0.352      | -            | -                | -                | -         |    -3.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     3535 | 2024-06-09 | Aurora            | L   | 0.347      | -            | -                | -                | -         |    -2.98 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     3542 | 2024-06-09 | 9 Pandas          | W   | 0.346      | -            | -                | -                | -         |     5.50 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     3551 | 2024-06-09 | Monte             | W   | 0.346      | -            | -                | -                | -         |     2.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3556 | 2024-06-09 | SAW               | L   | 0.346      | -            | -                | -                | -         |    -1.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3766 | 2024-06-05 | Aurora            | L   | 0.321      | -            | -                | -                | -         |    -2.53 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3816 | 2024-06-04 | Monte             | W   | 0.315      | -            | -                | -                | -         |     2.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     4223 | 2024-05-20 | Sangal            | L   | 0.213      | -            | -                | -                | -         |    -1.50 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           16 |     4301 | 2024-05-17 | Zero Tenacity     | W   | 0.195      | -            | -                | -                | -         |     3.32 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           15 |     4332 | 2024-05-16 | Aurora            | L   | 0.189      | -            | -                | -                | -         |    -1.47 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           14 |     4350 | 2024-05-16 | Eternal Fire      | L   | 0.187      | -            | -                | -                | -         |    -0.04 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           13 |     4390 | 2024-05-15 | B8                | W   | 0.181      | -            | -                | -                | -         |     3.22 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           12 |     4573 | 2024-05-09 | Endpoint          | L   | 0.141      | -            | -                | -                | -         |    -2.51 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           11 |     4732 | 2024-05-01 | Passion UA        | L   | 0.087      | -            | -                | -                | -         |    -1.19 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           10 |     4746 | 2024-05-01 | fnatic            | L   | 0.085      | -            | -                | -                | -         |    -0.75 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            9 |     4771 | 2024-04-29 | 3DMAX             | L   | 0.075      | -            | -                | -                | -         |    -0.12 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            8 |     4781 | 2024-04-29 | Zero Tenacity     | W   | 0.073      | -            | -                | -                | -         |     1.24 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            7 |     4818 | 2024-04-27 | Sangal            | W   | 0.060      | -            | -                | -                | -         |     1.51 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            6 |     4846 | 2024-04-26 | SINNERS           | W   | 0.054      | -            | -                | -                | -         |     1.35 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            5 |     4874 | 2024-04-25 | ex-Guild Eagles   | W   | 0.047      | -            | -                | -                | -         |     0.19 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            4 |     4896 | 2024-04-24 | MOUZ NXT          | W   | 0.040      | -            | -                | -                | -         |     0.43 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            3 |     4945 | 2024-04-21 | Nexus             | W   | 0.021      | -            | -                | -                | -         |     0.15 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            2 |     4948 | 2024-04-21 | B8                | L   | 0.020      | -            | -                | -                | -         |    -0.28 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            1 |     5005 | 2024-04-19 | Zero Tenacity     | L   | 0.008      | -            | -                | -                | -         |    -0.12 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,152.30)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-26 |      1.000 | $500.00        | $500.00         |
| 2024-08-06 |      0.734 | $10,000.00     | $7,342.48       |
| 2024-06-09 |      0.348 | $6,500.00      | $2,262.65       |
| 2024-05-02 |      0.094 | $500.00        | $47.17          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
