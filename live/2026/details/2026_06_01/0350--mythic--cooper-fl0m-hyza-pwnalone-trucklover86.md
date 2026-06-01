### Roster Details<br />
Team Name: Mythic<br />
Roster: Cooper, fl0m, hyza, PwnAlone, Trucklover86<br />
Global Rank: [350](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [96]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  452.1<br />
<br />
Final Rank Value (452.1) = Starting Rank Value (474.2) + Head To Head Adjustments (-22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.155[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.039<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 474.2
- 400 + ( ( 0.039 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 474.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     2909 | 2026-03-20 | 900FPSvsECO    | L   | 0.717      | -            | -                | -                | -         |    -4.66 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            8 |     2926 | 2026-03-20 | OverKnight     | L   | 0.715      | -            | -                | -                | -         |   -10.66 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            7 |     3150 | 2026-03-15 | F5             | L   | 0.683      | -            | -                | -                | -         |    -2.00 | fl0m, hyza, Jonji, PwnAlone, Trucklover86  |
|            6 |     3419 | 2026-03-09 | Zomblers       | L   | 0.643      | -            | -                | -                | -         |    -2.91 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            5 |     4355 | 2026-02-19 | 900FPSvsECO    | L   | 0.523      | -            | -                | -                | -         |    -3.57 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            4 |     4400 | 2026-02-18 | Voca           | L   | 0.516      | -            | -                | -                | -         |    -0.21 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            3 |     4459 | 2026-02-17 | Shimmer        | W   | 0.510      | 0.363        | 0.000 (0.000)    | 0.057 (0.010)    | 0 (0.000) |     9.87 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            2 |     4968 | 2026-02-05 | mouse          | L   | 0.428      | -            | -                | -                | -         |    -5.57 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            1 |     5052 | 2026-02-02 | insane players | L   | 0.407      | -            | -                | -                | -         |    -2.30 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
