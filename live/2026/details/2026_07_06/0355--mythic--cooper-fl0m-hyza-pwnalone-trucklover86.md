### Roster Details<br />
Team Name: Mythic<br />
Roster: Cooper, fl0m, hyza, PwnAlone, Trucklover86<br />
Global Rank: [355](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [91]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  480.1<br />
<br />
Final Rank Value (480.1) = Starting Rank Value (495.6) + Head To Head Adjustments (-15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.6
- 400 + ( ( 0.051 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 495.6


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
|            9 |     3570 | 2026-03-20 | 900FPSvsECO    | L   | 0.484      | -            | -                | -                | -         |    -4.03 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            8 |     3587 | 2026-03-20 | OverKnight     | L   | 0.482      | -            | -                | -                | -         |    -7.84 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            7 |     3811 | 2026-03-15 | F5             | L   | 0.450      | -            | -                | -                | -         |    -1.71 | fl0m, hyza, Jonji, PwnAlone, Trucklover86  |
|            6 |     4080 | 2026-03-09 | Zomblers       | L   | 0.410      | -            | -                | -                | -         |    -2.62 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            5 |     5016 | 2026-02-19 | 900FPSvsECO    | L   | 0.290      | -            | -                | -                | -         |    -2.52 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            4 |     5061 | 2026-02-18 | Voca           | L   | 0.283      | -            | -                | -                | -         |    -0.34 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            3 |     5120 | 2026-02-17 | Shimmer        | W   | 0.277      | 0.363        | 0.011 (0.001)    | 0.082 (0.008)    | 0 (0.000) |     6.52 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            2 |     5629 | 2026-02-05 | Villainous     | L   | 0.195      | -            | -                | -                | -         |    -1.70 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |
|            1 |     5713 | 2026-02-02 | insane players | L   | 0.174      | -            | -                | -                | -         |    -1.25 | Cooper, fl0m, hyza, PwnAlone, Trucklover86 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
