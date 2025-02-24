### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Global Rank: [140](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [97]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  695.7<br />
<br />
Final Rank Value (695.7) = Starting Rank Value (685.2) + Head To Head Adjustments (10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.2
- 400 + ( ( 0.150 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 685.2


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
|           30 |      863 | 2024-12-12 | Fire Flux        | L   | 0.706      | -            | -                | -                | -         |    -7.05 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |      876 | 2024-12-11 | CYBERSHOKE       | L   | 0.700      | -            | -                | -                | -         |    -8.37 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |      890 | 2024-12-10 | FLuffy Gangsters | W   | 0.693      | 0.143        | 0.006 (0.001)    | 0.452 (0.045)    | 0 (0.000) |    10.52 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     2426 | 2024-10-03 | WW               | L   | 0.237      | -            | -                | -                | -         |    -5.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     2462 | 2024-10-02 | Partizan         | L   | 0.231      | -            | -                | -                | -         |    -0.84 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     2536 | 2024-09-30 | SovvyKiNG        | W   | 0.218      | 0.384        | -                | 0.071 (0.006)    | 0 (0.000) |     1.76 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     2570 | 2024-09-29 | 500              | W   | 0.211      | 0.354        | 0.084 (0.006)    | 1.000 (0.075)    | 0 (0.000) |     5.35 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     2708 | 2024-09-26 | B8               | L   | 0.190      | -            | -                | -                | -         |    -0.60 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2866 | 2024-09-22 | Lynn Vision      | W   | 0.165      | 0.435        | 0.011 (0.001)    | 0.341 (0.024)    | 0 (0.000) |     3.46 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     2914 | 2024-09-20 | Rebels           | L   | 0.152      | -            | -                | -                | -         |    -2.27 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     2922 | 2024-09-20 | Permitta         | W   | 0.150      | 0.435        | 0.027 (0.002)    | 0.424 (0.028)    | 0 (0.000) |     3.77 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     2979 | 2024-09-18 | Endpoint         | L   | 0.140      | -            | -                | -                | -         |    -1.92 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     3048 | 2024-09-16 | Kosovo           | W   | 0.124      | -            | -                | -                | 0 (0.000) |     1.03 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     3069 | 2024-09-15 | SINNERS          | L   | 0.118      | -            | -                | -                | -         |    -0.92 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     3090 | 2024-09-14 | BC.Game          | W   | 0.113      | 0.435        | 0.075 (0.004)    | 0.863 (0.042)    | 0 (0.000) |     3.02 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     3120 | 2024-09-14 | CYBERSHOKE       | W   | 0.110      | 0.384        | 0.010 (0.000)    | 1.000 (0.042)    | 0 (0.000) |     2.37 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     3174 | 2024-09-12 | SAW              | W   | 0.098      | 0.435        | 0.244 (0.010)    | 0.442 (0.019)    | 0 (0.000) |     2.99 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     3230 | 2024-09-10 | Revenant         | W   | 0.086      | -            | -                | -                | 0 (0.000) |     0.72 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3271 | 2024-09-08 | Rhyno            | W   | 0.072      | -            | -                | -                | -         |     1.08 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3280 | 2024-09-08 | SINNERS          | W   | 0.070      | 0.384        | 0.028 (0.001)    | 0.546 (0.015)    | -         |     1.70 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3317 | 2024-09-07 | Monte            | L   | 0.063      | -            | -                | -                | -         |    -0.66 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3328 | 2024-09-06 | SovvyKiNG        | W   | 0.059      | -            | -                | -                | -         |     0.51 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3336 | 2024-09-06 | BC.Game          | L   | 0.058      | -            | -                | -                | -         |    -0.26 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3373 | 2024-09-05 | Spirit Academy   | L   | 0.052      | -            | -                | -                | -         |    -0.38 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3380 | 2024-09-05 | GUN5             | L   | 0.051      | -            | -                | -                | -         |    -0.30 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3429 | 2024-09-03 | SovvyKiNG        | W   | 0.039      | -            | -                | -                | -         |     0.34 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3489 | 2024-09-01 | RUSH B           | W   | 0.025      | 0.384        | 0.026 (0.000)    | 0.526 (0.005)    | -         |     0.55 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     3501 | 2024-08-31 | Permitta         | W   | 0.020      | 0.435        | 0.027 (0.000)    | -                | -         |     0.50 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     3552 | 2024-08-29 | SovvyKiNG        | W   | 0.006      | -            | -                | -                | -         |     0.05 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     3558 | 2024-08-29 | Cloud9           | L   | 0.005      | -            | -                | -                | -         |    -0.05 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,368.47)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.352 | $500.00        | $175.88         |
| 2024-10-03 |      0.239 | $2,500.00      | $596.62         |
| 2024-09-15 |      0.119 | $5,000.00      | $595.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
