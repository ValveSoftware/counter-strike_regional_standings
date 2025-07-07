### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, bekker, Boye, Griller, Patti<br />
Global Rank: [223](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  529.8<br />
<br />
Final Rank Value (529.8) = Starting Rank Value (518.3) + Head To Head Adjustments (11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.3
- 400 + ( ( 0.063 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 518.3


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
|            7 |     1176 | 2025-04-27 | HEROIC Academy | L   | 0.725      | -            | -                | -                | -         |    -6.63 | AcilioN, bekker, Boye, Griller, Patti  |
|            6 |     1194 | 2025-04-26 | Kronjyllands   | W   | 0.721      | 0.321        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.721) |     7.08 | AcilioN, bekker, Boye, Griller, Patti  |
|            5 |     2384 | 2025-03-17 | ECSTATIC       | L   | 0.453      | -            | -                | -                | -         |    -0.20 | AcilioN, Beccie, Griller, Patti, Viggo |
|            4 |     3093 | 2025-02-23 | ARCRED         | L   | 0.308      | -            | -                | -                | -         |    -1.16 | AcilioN, Beccie, Griller, Patti, Viggo |
|            3 |     3098 | 2025-02-23 | QMISTRY        | W   | 0.307      | 0.143        | 0.002 (0.000)    | 0.156 (0.007)    | 0 (0.000) |     6.20 | AcilioN, Beccie, Griller, Patti, Viggo |
|            2 |     3106 | 2025-02-23 | AMKAL          | W   | 0.306      | 0.143        | 0.001 (0.000)    | 0.598 (0.026)    | 0 (0.000) |     7.23 | AcilioN, Beccie, Griller, Patti, Viggo |
|            1 |     3320 | 2025-02-15 | RUBY           | L   | 0.253      | -            | -                | -                | -         |    -0.98 | AcilioN, Beccie, Griller, Patti, Viggo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
