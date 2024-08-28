### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, Jackinho, nilo, susp, ztr<br />
Global Rank: [108](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [79]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  826.5<br />
<br />
Final Rank Value (826.5) = Starting Rank Value (780.8) + Head To Head Adjustments (45.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 780.8
- 400 + ( ( 0.192 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 780.8


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
|           38 |     3225 | 2024-05-04 | AMKAL             | L   | 0.425      | -            | -                | -                | -         |    -2.12 | adamb, Jackinho, nilo, susp, ztr    |
|           37 |     3240 | 2024-05-03 | Zero Tenacity     | W   | 0.419      | 0.435        | 0.159 (0.029)    | 1.000 (0.182)    | 0 (0.000) |    10.38 | adamb, Jackinho, nilo, susp, ztr    |
|           36 |     3260 | 2024-05-02 | Sangal            | W   | 0.413      | 0.435        | 0.283 (0.051)    | 0.794 (0.142)    | 0 (0.000) |    11.32 | adamb, Jackinho, nilo, susp, ztr    |
|           35 |     3418 | 2024-04-25 | Nexus             | L   | 0.367      | -            | -                | -                | -         |    -5.72 | adamb, Jackinho, nilo, susp, ztr    |
|           34 |     3462 | 2024-04-23 | Alliance          | W   | 0.353      | 0.384        | 0.016 (0.002)    | 0.349 (0.047)    | 0 (0.000) |     6.05 | adamb, Jackinho, nilo, p1ke, susp   |
|           33 |     3567 | 2024-04-19 | FURIA             | L   | 0.327      | -            | -                | -                | -         |    -0.07 | adamb, Jackinho, Plopski, susp, ztr |
|           32 |     3605 | 2024-04-18 | Imperial          | L   | 0.320      | -            | -                | -                | -         |    -1.44 | adamb, Jackinho, Plopski, susp, ztr |
|           31 |     3887 | 2024-04-09 | ex-Guild Eagles   | L   | 0.259      | -            | -                | -                | -         |    -4.74 | adamb, Jackinho, nilo, susp, ztr    |
|           30 |     3903 | 2024-04-08 | Aurora            | L   | 0.254      | -            | -                | -                | -         |    -0.15 | adamb, Jackinho, nilo, susp, ztr    |
|           29 |     3915 | 2024-04-08 | 9 Pandas          | L   | 0.253      | -            | -                | -                | -         |    -1.80 | adamb, Jackinho, nilo, susp, ztr    |
|           28 |     3940 | 2024-04-07 | EYEBALLERS        | W   | 0.247      | 0.330        | -                | 0.553 (0.045)    | 0 (0.000) |     4.77 | adamb, Jackinho, nilo, susp, ztr    |
|           27 |     3949 | 2024-04-07 | Johnny Speeds     | W   | 0.245      | 0.330        | 0.119 (0.010)    | 0.985 (0.080)    | 0 (0.000) |     6.95 | adamb, Jackinho, nilo, susp, ztr    |
|           26 |     3965 | 2024-04-06 | Young Gods        | W   | 0.238      | 0.330        | 0.007 (0.001)    | -                | 0 (0.000) |     2.67 | adamb, Jackinho, nilo, susp, ztr    |
|           25 |     4017 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.226      | -            | -                | -                | -         |    -0.14 | adamb, Jackinho, nilo, susp, ztr    |
|           24 |     4043 | 2024-04-03 | Monte             | W   | 0.221      | 0.143        | 0.093 (0.003)    | 0.327 (0.010)    | 0 (0.000) |     5.24 | adamb, Jackinho, nilo, susp, ztr    |
|           23 |     4056 | 2024-04-03 | FAVBET            | W   | 0.220      | 0.143        | -                | 0.514 (0.016)    | 0 (0.000) |     3.47 | adamb, Jackinho, nilo, susp, ztr    |
|           22 |     4090 | 2024-04-02 | B8                | W   | 0.214      | 0.143        | 0.168 (0.005)    | 1.000 (0.031)    | 0 (0.000) |     5.46 | adamb, Jackinho, nilo, susp, ztr    |
|           21 |     4096 | 2024-04-02 | Aurora            | L   | 0.213      | -            | -                | -                | -         |    -0.11 | adamb, Jackinho, nilo, susp, ztr    |
|           20 |     4112 | 2024-04-01 | PARIVISION        | L   | 0.207      | -            | -                | -                | -         |    -0.89 | adamb, Jackinho, nilo, susp, ztr    |
|           19 |     4179 | 2024-03-27 | Aurora            | L   | 0.175      | -            | -                | -                | -         |    -0.09 | adamb, Jackinho, nilo, susp, ztr    |
|           18 |     4185 | 2024-03-27 | NAVI Junior       | W   | 0.174      | -            | -                | -                | 0 (0.000) |     2.04 | adamb, Jackinho, nilo, susp, ztr    |
|           17 |     4388 | 2024-03-15 | kONO              | L   | 0.094      | -            | -                | -                | -         |    -1.23 | adamb, Jackinho, nilo, susp, ztr    |
|           16 |     4425 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.086      | -            | -                | -                | -         |    -0.63 | adamb, Jackinho, nilo, susp, ztr    |
|           15 |     4459 | 2024-03-13 | HEROIC            | L   | 0.080      | -            | -                | -                | -         |    -0.08 | adamb, Jackinho, nilo, susp, ztr    |
|           14 |     4482 | 2024-03-12 | B8                | W   | 0.074      | 0.143        | 0.168 (0.002)    | 1.000 (0.011)    | -         |     1.92 | adamb, Jackinho, nilo, susp, ztr    |
|           13 |     4490 | 2024-03-12 | Apeks             | W   | 0.073      | -            | -                | -                | -         |     1.22 | adamb, Jackinho, nilo, susp, ztr    |
|           12 |     4500 | 2024-03-11 | ex-Preasy         | W   | 0.068      | -            | -                | -                | -         |     0.84 | adamb, Jackinho, nilo, susp, ztr    |
|           11 |     4514 | 2024-03-11 | ENCE              | L   | 0.067      | -            | -                | -                | -         |    -0.10 | adamb, Jackinho, nilo, susp, ztr    |
|           10 |     4522 | 2024-03-10 | Spirit            | L   | 0.061      | -            | -                | -                | -         |    -0.01 | adamb, Jackinho, nilo, susp, ztr    |
|            9 |     4549 | 2024-03-09 | Monte             | W   | 0.053      | 0.535        | 0.093 (0.003)    | 0.327 (0.009)    | -         |     1.30 | adamb, Jackinho, nilo, susp, ztr    |
|            8 |     4556 | 2024-03-09 | EYEBALLERS        | L   | 0.053      | -            | -                | -                | -         |    -0.58 | adamb, Jackinho, nilo, susp, ztr    |
|            7 |     4562 | 2024-03-09 | Lemondogs         | W   | 0.052      | -            | -                | -                | -         |     0.17 | adamb, Jackinho, nilo, susp, ztr    |
|            6 |     4580 | 2024-03-08 | Secret            | W   | 0.046      | -            | -                | -                | -         |     0.27 | adamb, Jackinho, nilo, susp, ztr    |
|            5 |     4621 | 2024-03-06 | Falcons           | W   | 0.035      | 0.535        | 0.316 (0.006)    | -                | -         |     1.08 | adamb, Jackinho, nilo, susp, ztr    |
|            4 |     4701 | 2024-03-03 | The Chosen Few    | W   | 0.015      | -            | -                | -                | -         |     0.14 | adamb, Jackinho, nilo, susp, ztr    |
|            3 |     4710 | 2024-03-03 | ILIN              | W   | 0.014      | -            | -                | -                | -         |     0.05 | adamb, Jackinho, nilo, susp, ztr    |
|            2 |     4714 | 2024-03-03 | RUSH B            | W   | 0.014      | -            | -                | -                | -         |     0.26 | adamb, Jackinho, nilo, susp, ztr    |
|            1 |     4723 | 2024-03-03 | ECLOT             | L   | 0.013      | -            | -                | -                | -         |    -0.03 | adamb, Jackinho, nilo, susp, ztr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,083.63)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      0.427 | $5,000.00      | $2,133.97       |
| 2024-04-20 |      0.335 | $5,000.00      | $1,675.16       |
| 2024-04-07 |      0.247 | $6,110.00      | $1,509.23       |
| 2024-03-10 |      0.061 | $12,500.00     | $765.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
