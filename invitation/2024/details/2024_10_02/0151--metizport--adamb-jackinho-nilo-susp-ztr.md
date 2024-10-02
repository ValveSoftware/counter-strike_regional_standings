### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, Jackinho, nilo, susp, ztr<br />
Global Rank: [151](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [101]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  696.1<br />
<br />
Final Rank Value (696.1) = Starting Rank Value (685.6) + Head To Head Adjustments (10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.6
- 400 + ( ( 0.149 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 685.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     4359 | 2024-05-04 | AMKAL           | L   | 0.191      | -            | -                | -                | -         |    -0.72 | adamb, Jackinho, nilo, susp, ztr    |
|           12 |     4374 | 2024-05-03 | Zero Tenacity   | W   | 0.185      | 0.435        | 0.125 (0.010)    | 1.000 (0.080)    | 0 (0.000) |     5.08 | adamb, Jackinho, nilo, susp, ztr    |
|           11 |     4394 | 2024-05-02 | Sangal          | W   | 0.179      | 0.435        | 0.218 (0.017)    | 0.645 (0.050)    | 0 (0.000) |     5.40 | adamb, Jackinho, nilo, susp, ztr    |
|           10 |     4552 | 2024-04-25 | Nexus           | L   | 0.133      | -            | -                | -                | -         |    -1.55 | adamb, Jackinho, nilo, susp, ztr    |
|            9 |     4596 | 2024-04-23 | Alliance        | W   | 0.119      | 0.384        | 0.010 (0.000)    | 0.363 (0.017)    | 0 (0.000) |     2.47 | adamb, Jackinho, nilo, p1ke, susp   |
|            8 |     4701 | 2024-04-19 | FURIA           | L   | 0.093      | -            | -                | -                | -         |    -0.02 | adamb, Jackinho, Plopski, susp, ztr |
|            7 |     4739 | 2024-04-18 | Imperial        | L   | 0.086      | -            | -                | -                | -         |    -0.19 | adamb, Jackinho, Plopski, susp, ztr |
|            6 |     5021 | 2024-04-09 | ex-Guild Eagles | L   | 0.025      | -            | -                | -                | -         |    -0.40 | adamb, Jackinho, nilo, susp, ztr    |
|            5 |     5037 | 2024-04-08 | Aurora          | L   | 0.020      | -            | -                | -                | -         |    -0.03 | adamb, Jackinho, nilo, susp, ztr    |
|            4 |     5049 | 2024-04-08 | 9 Pandas        | L   | 0.018      | -            | -                | -                | -         |    -0.09 | adamb, Jackinho, nilo, susp, ztr    |
|            3 |     5074 | 2024-04-07 | EYEBALLERS      | W   | 0.013      | 0.330        | 0.001 (0.000)    | 0.168 (0.001)    | 0 (0.000) |     0.24 | adamb, Jackinho, nilo, susp, ztr    |
|            2 |     5083 | 2024-04-07 | Johnny Speeds   | W   | 0.011      | 0.330        | 0.094 (0.000)    | 0.906 (0.003)    | 0 (0.000) |     0.30 | adamb, Jackinho, nilo, susp, ztr    |
|            1 |     5099 | 2024-04-06 | Young Gods      | W   | 0.004      | 0.330        | 0.004 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     0.06 | adamb, Jackinho, nilo, susp, ztr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,545.88)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      0.193 | $5,000.00      | $963.13         |
| 2024-04-20 |      0.101 | $5,000.00      | $504.31         |
| 2024-04-07 |      0.013 | $6,110.00      | $78.45          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
