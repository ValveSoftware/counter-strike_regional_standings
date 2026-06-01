### Roster Details<br />
Team Name: Outfit 49<br />
Roster: Andrew, brett, LUKE4k, s3rum, sava9e<br />
Global Rank: [360](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [99]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  413.7<br />
<br />
Final Rank Value (413.7) = Starting Rank Value (410.2) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.005<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 410.2
- 400 + ( ( 0.005 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 410.2


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
|            7 |     5822 | 2026-01-03 | Voca         | L   | 0.208      | -            | -                | -                | -         |    -0.06 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            6 |     5827 | 2026-01-03 | Dark Knight  | W   | 0.207      | 0.323        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.207) |     3.17 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            5 |     5830 | 2026-01-03 | Voca         | L   | 0.207      | -            | -                | -                | -         |    -0.05 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            4 |     6019 | 2025-12-11 | Surge        | L   | 0.056      | -            | -                | -                | -         |    -0.63 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            3 |     6029 | 2025-12-10 | Wanted Goons | W   | 0.050      | 0.333        | 0.000 (0.000)    | 0.163 (0.003)    | 0 (0.000) |     1.24 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            2 |     6059 | 2025-12-08 | Rave         | L   | 0.036      | -            | -                | -                | -         |    -0.21 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            1 |     6152 | 2025-12-04 | BOSS         | L   | 0.009      | -            | -                | -                | -         |    -0.02 | Andrew, brett, LUKE4k, s3rum, sava9e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
