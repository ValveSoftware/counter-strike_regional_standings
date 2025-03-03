### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Global Rank: [155](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [102]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  679.5<br />
<br />
Final Rank Value (679.5) = Starting Rank Value (673.8) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.8
- 400 + ( ( 0.142 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 673.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      951 | 2024-12-12 | Fire Flux        | L   | 0.661      | -            | -                | -                | -         |    -6.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |      964 | 2024-12-11 | CYBERSHOKE       | L   | 0.654      | -            | -                | -                | -         |    -7.21 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |      978 | 2024-12-10 | FLuffy Gangsters | W   | 0.647      | 0.143        | 0.006 (0.001)    | 0.409 (0.038)    | 0 (0.000) |    10.29 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2514 | 2024-10-03 | WW               | L   | 0.191      | -            | -                | -                | -         |    -4.45 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     2550 | 2024-10-02 | Partizan         | L   | 0.185      | -            | -                | -                | -         |    -0.64 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     2624 | 2024-09-30 | SovvyKiNG        | W   | 0.173      | 0.384        | 0.000 (0.000)    | 0.054 (0.004)    | 0 (0.000) |     1.49 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     2658 | 2024-09-29 | 500              | W   | 0.165      | 0.354        | 0.092 (0.005)    | 1.000 (0.059)    | 0 (0.000) |     4.32 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     2796 | 2024-09-26 | B8               | L   | 0.145      | -            | -                | -                | -         |    -0.42 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     2954 | 2024-09-22 | Lynn Vision      | W   | 0.120      | 0.435        | 0.011 (0.001)    | 0.329 (0.017)    | 0 (0.000) |     2.56 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     3002 | 2024-09-20 | Rebels           | L   | 0.106      | -            | -                | -                | -         |    -1.54 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     3010 | 2024-09-20 | Permitta         | W   | 0.105      | 0.435        | 0.027 (0.001)    | 0.364 (0.017)    | 0 (0.000) |     2.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     3067 | 2024-09-18 | Endpoint         | L   | 0.094      | -            | -                | -                | -         |    -1.23 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     3136 | 2024-09-16 | Kosovo           | W   | 0.078      | -            | -                | -                | 0 (0.000) |     0.68 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3157 | 2024-09-15 | SINNERS          | L   | 0.073      | -            | -                | -                | -         |    -0.55 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3178 | 2024-09-14 | BC.Game          | W   | 0.067      | 0.435        | 0.076 (0.002)    | 0.906 (0.027)    | 0 (0.000) |     1.83 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3208 | 2024-09-14 | CYBERSHOKE       | W   | 0.065      | 0.384        | 0.010 (0.000)    | 1.000 (0.025)    | 0 (0.000) |     1.44 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3262 | 2024-09-12 | SAW              | W   | 0.052      | 0.435        | 0.262 (0.006)    | 0.413 (0.009)    | 0 (0.000) |     1.60 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3318 | 2024-09-10 | Revenant         | W   | 0.040      | -            | -                | -                | 0 (0.000) |     0.34 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3359 | 2024-09-08 | Rhyno            | W   | 0.027      | 0.435        | 0.002 (0.000)    | 0.064 (0.001)    | -         |     0.41 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3368 | 2024-09-08 | SINNERS          | W   | 0.025      | 0.384        | 0.026 (0.000)    | 0.503 (0.005)    | -         |     0.61 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3405 | 2024-09-07 | Monte            | L   | 0.018      | -            | -                | -                | -         |    -0.18 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3416 | 2024-09-06 | SovvyKiNG        | W   | 0.014      | -            | -                | -                | -         |     0.12 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     3424 | 2024-09-06 | BC.Game          | L   | 0.013      | -            | -                | -                | -         |    -0.05 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     3461 | 2024-09-05 | Spirit Academy   | L   | 0.006      | -            | -                | -                | -         |    -0.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     3468 | 2024-09-05 | GUN5             | L   | 0.006      | -            | -                | -                | -         |    -0.03 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,006.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.306 | $500.00        | $153.23         |
| 2024-10-03 |      0.193 | $2,500.00      | $483.35         |
| 2024-09-15 |      0.074 | $5,000.00      | $369.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
