### Roster Details<br />
Team Name: BRUTE<br />
Roster: m0nsterr, realzen, sAvana1, v4NO, w4rden<br />
Global Rank: [204](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [120]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  583.9<br />
<br />
Final Rank Value (583.9) = Starting Rank Value (591.2) + Head To Head Adjustments (-7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.241[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 591.2
- 400 + ( ( 0.105 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 591.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2434 | 2025-01-06 | EYEBALLERS      | L   | 0.407      | -            | -                | -                | -         |    -4.48 | m0nsterr, realzen, sAvana1, v4NO, w4rden |
|            6 |     2443 | 2025-01-04 | ex-Heimo        | W   | 0.393      | 0.143        | 0.002 (0.000)    | 0.096 (0.005)    | 0 (0.000) |     6.79 | m0nsterr, M1key, realzen, v4NO, w4rden   |
|            5 |     2452 | 2024-12-29 | Dark Cloud      | L   | 0.352      | -            | -                | -                | -         |    -4.65 | m0nsterr, realzen, Siko, v4NO, w4rden    |
|            4 |     2459 | 2024-12-28 | Rhyno           | L   | 0.345      | -            | -                | -                | -         |    -4.71 | m0nsterr, realzen, Siko, v4NO, w4rden    |
|            3 |     2994 | 2024-11-24 | Sampi           | L   | 0.119      | -            | -                | -                | -         |    -1.81 | m0nsterr, realzen, Siko, v4NO, w4rden    |
|            2 |     3017 | 2024-11-23 | ECLOT           | L   | 0.113      | -            | -                | -                | -         |    -0.24 | m0nsterr, realzen, Siko, v4NO, w4rden    |
|            1 |     3045 | 2024-11-22 | SINNERS Academy | W   | 0.106      | 0.458        | 0.000 (0.000)    | 0.006 (0.000)    | 1 (0.106) |     1.75 | m0nsterr, realzen, Siko, v4NO, w4rden    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($257.72)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.120 | $2,150.00      | $257.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
