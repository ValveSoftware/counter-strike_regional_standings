### Roster Details<br />
Team Name: Preasy<br />
Roster: Patti<br />
Global Rank: [262](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [136]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  416.6<br />
<br />
Final Rank Value (416.6) = Starting Rank Value (419.1) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.040[<sup>2</sup>](#table1)

The average of these factors is 0.010<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 419.1
- 400 + ( ( 0.010 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 419.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1150 | 2025-07-09 | NOVAQ          | L   | 0.839      | -            | -                | -                | -         |    -2.56 | bekker, Boye, Patti, Tubsy, Viggo      |
|            4 |     1171 | 2025-07-07 | KHAN           | L   | 0.827      | -            | -                | -                | -         |    -3.32 | bekker, Boye, Patti, Tubsy, Viggo      |
|            3 |     2393 | 2025-04-27 | HEROIC Academy | L   | 0.352      | -            | -                | -                | -         |    -1.79 | AcilioN, bekker, Boye, Griller, Patti  |
|            2 |     2411 | 2025-04-26 | Kronjyllands   | W   | 0.348      | 0.321        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.348) |     5.14 | AcilioN, bekker, Boye, Griller, Patti  |
|            1 |     3601 | 2025-03-17 | ECSTATIC       | L   | 0.080      | -            | -                | -                | -         |    -0.04 | AcilioN, Beccie, Griller, Patti, Viggo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
