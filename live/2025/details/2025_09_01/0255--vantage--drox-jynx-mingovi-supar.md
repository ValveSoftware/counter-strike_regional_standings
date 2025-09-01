### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, Mingovi, supar<br />
Global Rank: [255](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [43]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  478.5<br />
<br />
Final Rank Value (478.5) = Starting Rank Value (479.6) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.6
- 400 + ( ( 0.041 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 479.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3158 | 2025-03-28 | FURY          | L   | 0.157      | -            | -                | -                | -         |    -1.58 | Drox, Jynx, Mingovi, supar, swerzieN |
|            4 |     3216 | 2025-03-28 | SemperFi      | L   | 0.152      | -            | -                | -                | -         |    -0.88 | Drox, Jynx, Mingovi, Snaaz, supar    |
|            3 |     3295 | 2025-03-27 | Only One Word | W   | 0.144      | 0.624        | 0.001 (0.000)    | 0.065 (0.006)    | 0 (0.000) |     3.34 | Drox, Jynx, Mingovi, supar, swerzieN |
|            2 |     3468 | 2025-03-21 | Mindfreak     | L   | 0.104      | -            | -                | -                | -         |    -1.06 | Drox, Jynx, Mingovi, supar, swerzieN |
|            1 |     3472 | 2025-03-20 | ex-TALON      | L   | 0.103      | -            | -                | -                | -         |    -0.83 | Drox, Jynx, Mingovi, supar, swerzieN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
