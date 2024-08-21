### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, Jackinho, nilo, susp, ztr<br />
Global Rank: [105](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [76]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  847.7<br />
<br />
Final Rank Value (847.7) = Starting Rank Value (793.3) + Head To Head Adjustments (54.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 793.3
- 400 + ( ( 0.198 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 793.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |     2930 | 2024-05-04 | AMKAL             | L   | 0.471      | -            | -                | -                | -         |    -2.83 | adamb, Jackinho, nilo, susp, ztr    |
|           40 |     2945 | 2024-05-03 | Zero Tenacity     | W   | 0.464      | 0.435        | 0.139 (0.028)    | 1.000 (0.202)    | 0 (0.000) |    11.09 | adamb, Jackinho, nilo, susp, ztr    |
|           39 |     2965 | 2024-05-02 | Sangal            | W   | 0.459      | 0.435        | 0.277 (0.055)    | 0.800 (0.160)    | 0 (0.000) |    12.34 | adamb, Jackinho, nilo, susp, ztr    |
|           38 |     3123 | 2024-04-25 | Nexus             | L   | 0.413      | -            | -                | -                | -         |    -6.73 | adamb, Jackinho, nilo, susp, ztr    |
|           37 |     3167 | 2024-04-23 | Alliance          | W   | 0.398      | 0.384        | 0.016 (0.002)    | 0.271 (0.041)    | 0 (0.000) |     6.39 | adamb, Jackinho, nilo, p1ke, susp   |
|           36 |     3272 | 2024-04-19 | FURIA             | L   | 0.373      | -            | -                | -                | -         |    -0.13 | adamb, Jackinho, Plopski, susp, ztr |
|           35 |     3310 | 2024-04-18 | Imperial          | L   | 0.366      | -            | -                | -                | -         |    -1.46 | adamb, Jackinho, Plopski, susp, ztr |
|           34 |     3592 | 2024-04-09 | ex-Guild Eagles   | L   | 0.305      | -            | -                | -                | -         |    -5.78 | adamb, Jackinho, nilo, susp, ztr    |
|           33 |     3608 | 2024-04-08 | Aurora            | L   | 0.300      | -            | -                | -                | -         |    -0.14 | adamb, Jackinho, nilo, susp, ztr    |
|           32 |     3620 | 2024-04-08 | 9 Pandas          | L   | 0.298      | -            | -                | -                | -         |    -2.90 | adamb, Jackinho, nilo, susp, ztr    |
|           31 |     3645 | 2024-04-07 | EYEBALLERS        | W   | 0.293      | 0.330        | -                | 0.550 (0.053)    | 0 (0.000) |     5.39 | adamb, Jackinho, nilo, susp, ztr    |
|           30 |     3654 | 2024-04-07 | Johnny Speeds     | W   | 0.291      | 0.330        | 0.120 (0.012)    | 1.000 (0.096)    | 0 (0.000) |     8.30 | adamb, Jackinho, nilo, susp, ztr    |
|           29 |     3670 | 2024-04-06 | Young Gods        | W   | 0.284      | 0.330        | 0.007 (0.001)    | -                | 0 (0.000) |     3.02 | adamb, Jackinho, nilo, susp, ztr    |
|           28 |     3722 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.272      | -            | -                | -                | -         |    -0.15 | adamb, Jackinho, nilo, susp, ztr    |
|           27 |     3748 | 2024-04-03 | Monte             | W   | 0.267      | 0.143        | 0.097 (0.004)    | 0.364 (0.014)    | 0 (0.000) |     6.36 | adamb, Jackinho, nilo, susp, ztr    |
|           26 |     3761 | 2024-04-03 | FAVBET            | W   | 0.265      | 0.143        | -                | 0.475 (0.018)    | 0 (0.000) |     3.99 | adamb, Jackinho, nilo, susp, ztr    |
|           25 |     3795 | 2024-04-02 | B8                | W   | 0.260      | 0.143        | 0.170 (0.006)    | 1.000 (0.037)    | 0 (0.000) |     6.45 | adamb, Jackinho, nilo, susp, ztr    |
|           24 |     3801 | 2024-04-02 | Aurora            | L   | 0.258      | -            | -                | -                | -         |    -0.10 | adamb, Jackinho, nilo, susp, ztr    |
|           23 |     3817 | 2024-04-01 | PARIVISION        | L   | 0.252      | -            | -                | -                | -         |    -1.13 | adamb, Jackinho, nilo, susp, ztr    |
|           22 |     3884 | 2024-03-27 | Aurora            | L   | 0.220      | -            | -                | -                | -         |    -0.09 | adamb, Jackinho, nilo, susp, ztr    |
|           21 |     3890 | 2024-03-27 | NAVI Junior       | W   | 0.220      | -            | -                | -                | 0 (0.000) |     2.46 | adamb, Jackinho, nilo, susp, ztr    |
|           20 |     4093 | 2024-03-15 | kONO              | L   | 0.139      | -            | -                | -                | -         |    -1.95 | adamb, Jackinho, nilo, susp, ztr    |
|           19 |     4130 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.132      | -            | -                | -                | -         |    -1.27 | adamb, Jackinho, nilo, susp, ztr    |
|           18 |     4164 | 2024-03-13 | HEROIC            | L   | 0.125      | -            | -                | -                | -         |    -0.10 | adamb, Jackinho, nilo, susp, ztr    |
|           17 |     4187 | 2024-03-12 | B8                | W   | 0.120      | 0.143        | 0.170 (0.003)    | 1.000 (0.017)    | -         |     3.02 | adamb, Jackinho, nilo, susp, ztr    |
|           16 |     4195 | 2024-03-12 | Apeks             | W   | 0.119      | -            | -                | -                | -         |     2.00 | adamb, Jackinho, nilo, susp, ztr    |
|           15 |     4205 | 2024-03-11 | ex-Preasy         | W   | 0.114      | -            | -                | -                | -         |     1.44 | adamb, Jackinho, nilo, susp, ztr    |
|           14 |     4219 | 2024-03-11 | ENCE              | L   | 0.112      | -            | -                | -                | -         |    -0.13 | adamb, Jackinho, nilo, susp, ztr    |
|           13 |     4227 | 2024-03-10 | Spirit            | L   | 0.107      | -            | -                | -                | -         |    -0.01 | adamb, Jackinho, nilo, susp, ztr    |
|           12 |     4254 | 2024-03-09 | Monte             | W   | 0.099      | 0.535        | 0.097 (0.005)    | 0.364 (0.019)    | -         |     2.44 | adamb, Jackinho, nilo, susp, ztr    |
|           11 |     4261 | 2024-03-09 | EYEBALLERS        | L   | 0.098      | -            | -                | -                | -         |    -1.14 | adamb, Jackinho, nilo, susp, ztr    |
|           10 |     4267 | 2024-03-09 | Lemondogs         | W   | 0.098      | -            | -                | -                | -         |     0.30 | adamb, Jackinho, nilo, susp, ztr    |
|            9 |     4285 | 2024-03-08 | Secret            | W   | 0.092      | -            | -                | -                | -         |     0.51 | adamb, Jackinho, nilo, susp, ztr    |
|            8 |     4326 | 2024-03-06 | Falcons           | W   | 0.080      | 0.535        | 0.246 (0.011)    | -                | -         |     2.49 | adamb, Jackinho, nilo, susp, ztr    |
|            7 |     4406 | 2024-03-03 | The Chosen Few    | W   | 0.060      | -            | -                | -                | -         |     0.58 | adamb, Jackinho, nilo, susp, ztr    |
|            6 |     4415 | 2024-03-03 | ILIN              | W   | 0.059      | -            | -                | -                | -         |     0.19 | adamb, Jackinho, nilo, susp, ztr    |
|            5 |     4419 | 2024-03-03 | RUSH B            | W   | 0.059      | -            | -                | -                | -         |     1.13 | adamb, Jackinho, nilo, susp, ztr    |
|            4 |     4428 | 2024-03-03 | ECLOT             | L   | 0.059      | -            | -                | -                | -         |    -0.15 | adamb, Jackinho, nilo, susp, ztr    |
|            3 |     4474 | 2024-02-29 | Endpoint          | W   | 0.039      | -            | -                | -                | -         |     0.93 | adamb, Jackinho, nilo, susp, ztr    |
|            2 |     4497 | 2024-02-28 | INGLORIOUS        | W   | 0.031      | -            | -                | -                | -         |     0.17 | adamb, Jackinho, spooke, susp, ztr  |
|            1 |     4511 | 2024-02-27 | ex-Guild Eagles   | L   | 0.026      | -            | -                | -                | -         |    -0.44 | adamb, Jackinho, nilo, susp, ztr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,390.09)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      0.472 | $5,000.00      | $2,362.30       |
| 2024-04-20 |      0.381 | $5,000.00      | $1,903.48       |
| 2024-04-07 |      0.293 | $6,110.00      | $1,788.23       |
| 2024-03-10 |      0.107 | $12,500.00     | $1,336.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
