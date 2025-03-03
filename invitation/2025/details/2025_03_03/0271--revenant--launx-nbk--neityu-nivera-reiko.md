### Roster Details<br />
Team Name: Revenant<br />
Roster: lauNX, NBK-, Neityu, Nivera, reiko<br />
Global Rank: [271](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [151]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  497.4<br />
<br />
Final Rank Value (497.4) = Starting Rank Value (495.3) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.3
- 400 + ( ( 0.049 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 495.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3184 | 2024-09-14 | SINNERS    | W   | 0.067      | 0.384        | 0.026 (0.001)    | 0.503 (0.013)    | 0 (0.000) |     1.89 | lauNX, NBK-, Neityu, Nivera, reiko |
|            5 |     3318 | 2024-09-10 | Insilio    | L   | 0.040      | -            | -                | -                | -         |    -0.34 | ADRON, lauNX, NBK-, Nivera, reiko  |
|            4 |     3340 | 2024-09-09 | EYEBALLERS | L   | 0.034      | -            | -                | -                | -         |    -0.19 | ADRON, lauNX, NBK-, Nivera, reiko  |
|            3 |     3398 | 2024-09-07 | AMKAL      | W   | 0.019      | 0.384        | 0.000 (0.000)    | 0.471 (0.003)    | 0 (0.000) |     0.39 | 0SAMAS, lauNX, NBK-, Nivera, reiko |
|            2 |     3415 | 2024-09-06 | JANO       | W   | 0.014      | 0.435        | 0.022 (0.000)    | 0.149 (0.001)    | 0 (0.000) |     0.39 | ADRON, lauNX, NBK-, Nivera, reiko  |
|            1 |     3471 | 2024-09-05 | Tricked    | L   | 0.005      | -            | -                | -                | -         |    -0.02 | lauNX, NBK-, Nivera, reiko, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
