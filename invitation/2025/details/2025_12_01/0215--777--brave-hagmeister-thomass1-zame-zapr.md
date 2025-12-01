### Roster Details<br />
Team Name: 777<br />
Roster: Brave, Hagmeister, thomass1, zame, ZapR<br />
Global Rank: [215](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [131]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  612.7<br />
<br />
Final Rank Value (612.7) = Starting Rank Value (596.0) + Head To Head Adjustments (16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.202[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 596.0
- 400 + ( ( 0.103 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 596.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      580 | 2025-11-07 | Lilmix        | L   | 1.000      | -            | -                | -                | -         |   -15.75 | Brave, Hagmeister, thomass1, zame, ZapR |
|            4 |      596 | 2025-11-07 | Sashi         | L   | 1.000      | -            | -                | -                | -         |    -1.32 | Brave, Hagmeister, thomass1, zame, ZapR |
|            3 |      610 | 2025-11-07 | BetBoom       | L   | 1.000      | -            | -                | -                | -         |    -0.32 | Brave, Hagmeister, thomass1, zame, ZapR |
|            2 |      624 | 2025-11-07 | Boys N Da HUD | W   | 1.000      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     6.80 | Brave, Hagmeister, thomass1, zame, ZapR |
|            1 |      634 | 2025-11-07 | Betclic       | W   | 1.000      | 0.335        | 0.002 (0.001)    | 0.440 (0.148)    | 1 (1.000) |    27.34 | Brave, Hagmeister, thomass1, zame, ZapR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
