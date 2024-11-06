### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [45](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [31]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  1061.3<br />
<br />
Final Rank Value (1061.3) = Starting Rank Value (1051.4) + Head To Head Adjustments (9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.440[<sup>2</sup>](#table1)
- Opponent Network: 0.275[<sup>2</sup>](#table1)
- LAN Wins: 0.220[<sup>2</sup>](#table1)

The average of these factors is 0.332<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1051.4
- 400 + ( ( 0.332 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 1051.4


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
|           56 |      368 | 2024-10-18 | UNPAID            | L   | 1.000      | -            | -                | -                | -         |   -14.88 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           55 |      388 | 2024-10-17 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -10.79 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           54 |      416 | 2024-10-16 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -19.41 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           53 |      423 | 2024-10-16 | Solid             | W   | 1.000      | 0.624        | -                | 0.624 (0.390)    | 1 (1.000) |     9.98 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           52 |      447 | 2024-10-15 | Aurora            | W   | 1.000      | 0.500        | 0.088 (0.044)    | 0.489 (0.244)    | 0 (0.000) |    15.68 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           51 |      675 | 2024-10-05 | 3DMAX             | L   | 0.986      | -            | -                | -                | -         |    -4.50 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           50 |      748 | 2024-10-03 | Spirit Academy    | W   | 0.972      | 0.435        | 0.062 (0.026)    | 0.825 (0.348)    | 0 (0.000) |    13.36 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           49 |     1153 | 2024-09-23 | Monte             | L   | 0.906      | -            | -                | -                | -         |   -14.59 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           48 |     1459 | 2024-09-12 | GUN5              | L   | 0.834      | -            | -                | -                | -         |   -15.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           47 |     1507 | 2024-09-11 | 9INE              | W   | 0.826      | 0.384        | 0.054 (0.017)    | 0.813 (0.258)    | 0 (0.000) |     8.97 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           46 |     1709 | 2024-09-04 | Monte             | W   | 0.779      | 0.384        | -                | 0.882 (0.264)    | 0 (0.000) |    11.40 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |     1861 | 2024-08-29 | AMKAL             | W   | 0.739      | -            | -                | -                | 0 (0.000) |     6.61 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |     1975 | 2024-08-27 | Gaimin Gladiators | L   | 0.726      | -            | -                | -                | -         |   -18.00 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     2080 | 2024-08-25 | Monte Gen         | L   | 0.715      | -            | -                | -                | -         |   -17.98 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     2139 | 2024-08-23 | GamerLegion       | W   | 0.700      | 0.143        | 0.132 (0.013)    | -                | 0 (0.000) |     9.05 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     2175 | 2024-08-22 | B8                | W   | 0.692      | 0.143        | 0.158 (0.016)    | -                | 0 (0.000) |    15.29 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     2207 | 2024-08-21 | SINNERS           | L   | 0.687      | -            | -                | -                | -         |    -9.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     2230 | 2024-08-21 | ex-Enterprise     | W   | 0.686      | -            | -                | -                | -         |     6.68 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     2270 | 2024-08-20 | 9 Pandas          | W   | 0.680      | 0.500        | 0.036 (0.012)    | 0.904 (0.307)    | -         |    10.15 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     2301 | 2024-08-19 | Ninjas in Pyjamas | L   | 0.674      | -            | -                | -                | -         |    -8.66 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     2397 | 2024-08-15 | OG                | L   | 0.647      | -            | -                | -                | -         |   -13.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     2405 | 2024-08-15 | 9INE              | W   | 0.647      | -            | -                | -                | -         |     6.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2413 | 2024-08-15 | Metizport         | W   | 0.646      | -            | -                | -                | -         |     5.82 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2451 | 2024-08-13 | RUSH B            | W   | 0.634      | -            | -                | -                | -         |     4.18 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2496 | 2024-08-12 | Monte             | W   | 0.628      | 0.500        | 0.034 (0.011)    | 0.882 (0.277)    | -         |     9.51 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2581 | 2024-08-09 | 3DMAX             | L   | 0.607      | -            | -                | -                | -         |    -1.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2662 | 2024-08-07 | SINNERS           | W   | 0.592      | -            | -                | -                | -         |    10.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           29 |     2694 | 2024-08-06 | Sangal            | L   | 0.587      | -            | -                | -                | -         |    -2.50 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           28 |     2708 | 2024-08-06 | Aurora Young Blud | W   | 0.586      | -            | -                | -                | -         |     5.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           27 |     2726 | 2024-08-05 | ENCE              | W   | 0.580      | 0.435        | 0.243 (0.061)    | -                | -         |    15.31 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           26 |     2749 | 2024-08-04 | Betera            | L   | 0.574      | -            | -                | -                | -         |   -16.86 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           25 |     2790 | 2024-08-03 | GUN5              | L   | 0.567      | -            | -                | -                | -         |   -13.06 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           24 |     2807 | 2024-08-03 | CYBERSHOKE        | W   | 0.565      | -            | -                | -                | -         |     5.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           23 |     2817 | 2024-08-02 | TSM               | W   | 0.561      | 0.500        | 0.042 (0.012)    | 0.725 (0.203)    | -         |     5.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           22 |     2858 | 2024-08-01 | 9 Pandas          | W   | 0.554      | 0.500        | -                | 0.904 (0.251)    | -         |     7.39 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           21 |     2971 | 2024-07-30 | Permitta          | W   | 0.539      | -            | -                | -                | -         |     8.38 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           20 |     3073 | 2024-07-26 | UNPAID            | L   | 0.514      | -            | -                | -                | -         |    -3.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           19 |     3088 | 2024-07-26 | True Rippers      | W   | 0.512      | -            | -                | -                | 1 (0.512) |     1.38 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           18 |     3119 | 2024-07-25 | ENCE              | L   | 0.506      | -            | -                | -                | -         |    -2.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           17 |     3157 | 2024-07-24 | The MongolZ       | W   | 0.499      | 0.650        | 1.000 (0.324)    | 0.632 (0.205)    | 1 (0.499) |    15.53 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     3163 | 2024-07-24 | Aurora            | L   | 0.498      | -            | -                | -                | -         |    -5.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     3837 | 2024-06-14 | Permitta          | L   | 0.233      | -            | -                | -                | -         |    -3.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3939 | 2024-06-10 | RUSH B            | W   | 0.206      | -            | -                | -                | -         |     1.43 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3944 | 2024-06-10 | 3DMAX             | L   | 0.206      | -            | -                | -                | -         |    -0.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     3950 | 2024-06-10 | SINNERS           | L   | 0.205      | -            | -                | -                | -         |    -2.34 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     3984 | 2024-06-09 | Aurora            | L   | 0.200      | -            | -                | -                | -         |    -2.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     3991 | 2024-06-09 | 9 Pandas          | W   | 0.199      | -            | -                | -                | -         |     2.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     4000 | 2024-06-09 | Monte             | W   | 0.199      | -            | -                | -                | -         |     0.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     4005 | 2024-06-09 | SAW               | L   | 0.199      | -            | -                | -                | -         |    -0.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     4215 | 2024-06-05 | Aurora            | L   | 0.174      | -            | -                | -                | -         |    -2.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     4265 | 2024-06-04 | Monte             | W   | 0.168      | -            | -                | -                | -         |     0.67 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     4672 | 2024-05-20 | Sangal            | L   | 0.066      | -            | -                | -                | -         |    -0.29 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            4 |     4750 | 2024-05-17 | Zero Tenacity     | W   | 0.048      | -            | -                | -                | -         |     0.64 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            3 |     4781 | 2024-05-16 | Aurora            | L   | 0.042      | -            | -                | -                | -         |    -0.54 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            2 |     4799 | 2024-05-16 | Eternal Fire      | L   | 0.040      | -            | -                | -                | -         |    -0.03 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|            1 |     4839 | 2024-05-15 | B8                | W   | 0.034      | -            | -                | -                | -         |     0.89 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,633.16)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-10-06 |      0.995 | $2,000.00      | $1,989.39       |
| 2024-09-26 |      0.927 | $500.00        | $463.60         |
| 2024-08-06 |      0.587 | $10,000.00     | $5,872.81       |
| 2024-06-09 |      0.201 | $6,500.00      | $1,307.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
