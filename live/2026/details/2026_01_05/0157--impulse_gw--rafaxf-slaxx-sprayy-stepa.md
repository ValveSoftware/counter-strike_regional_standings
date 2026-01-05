### Roster Details<br />
Team Name: Impulse GW<br />
Roster: rafaxF, Slaxx, Sprayy, Stepa<br />
Global Rank: [157](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [107]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  773.6<br />
<br />
Final Rank Value (773.6) = Starting Rank Value (775.5) + Head To Head Adjustments (-1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.277[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 775.5
- 400 + ( ( 0.189 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 775.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      106 | 2025-12-21 | SAW          | L   | 1.000      | -            | -                | -                | -         |    -0.44 | pr, rafaxF, Slaxx, Sprayy, Stepa     |
|            6 |      128 | 2025-12-20 | Rebels       | W   | 1.000      | 0.309        | 0.004 (0.001)    | 0.068 (0.021)    | 1 (1.000) |    17.12 | pr, rafaxF, Slaxx, Sprayy, Stepa     |
|            5 |      135 | 2025-12-20 | Flame Hard   | W   | 1.000      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.76 | pr, rafaxF, Slaxx, Sprayy, Stepa     |
|            4 |      139 | 2025-12-20 | Rebels       | L   | 1.000      | -            | -                | -                | -         |   -14.05 | pr, rafaxF, Slaxx, Sprayy, Stepa     |
|            3 |      694 | 2025-11-22 | Sashi        | L   | 0.906      | -            | -                | -                | -         |    -2.11 | Didjey, rafaxF, Slaxx, Sprayy, Stepa |
|            2 |     1997 | 2025-10-11 | Rebels       | L   | 0.627      | -            | -                | -                | -         |    -9.89 | Didjey, rafaxF, Slaxx, Sprayy, Stepa |
|            1 |     2030 | 2025-10-10 | CarritoSpain | W   | 0.620      | 0.317        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.620) |     3.69 | Didjey, rafaxF, Slaxx, Sprayy, Stepa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($877.94)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-23 |      0.914 | $435.00        | $397.52         |
| 2025-10-12 |      0.634 | $758.00        | $480.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
