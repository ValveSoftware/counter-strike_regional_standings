### Roster Details<br />
Team Name: Elevate<br />
Roster: bnc, ckzao, diozera, lash, zede<br />
Global Rank: [292](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [86]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  396.4<br />
<br />
Final Rank Value (396.4) = Starting Rank Value (400.6) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.6
- 400 + ( ( 0.000 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 400.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3983 | 2025-08-13 | LP             | L   | 0.234      | -            | -                | -                | -         |    -2.01 | bnc, ckzao, diozera, lash, zede |
|            7 |     4087 | 2025-08-11 | Bounty Hunters | L   | 0.221      | -            | -                | -                | -         |    -3.45 | bnc, ckzao, diozera, lash, zede |
|            6 |     4565 | 2025-07-16 | Imperial       | L   | 0.049      | -            | -                | -                | -         |    -0.00 | bnc, ckzao, diozera, lash, zede |
|            5 |     4573 | 2025-07-16 | LP             | W   | 0.048      | 0.624        | 0.000 (0.000)    | 0.375 (0.011)    | 0 (0.000) |     1.09 | bnc, ckzao, diozera, lash, zede |
|            4 |     4689 | 2025-07-11 | RED Canids     | L   | 0.015      | -            | -                | -                | -         |    -0.01 | bnc, ckzao, diozera, lash, zede |
|            3 |     4724 | 2025-07-10 | GameHunters    | W   | 0.007      | 0.376        | 0.000 (0.000)    | 0.247 (0.001)    | 0 (0.000) |     0.17 | bnc, ckzao, diozera, lash, zede |
|            2 |     4728 | 2025-07-10 | Galorys        | L   | 0.007      | -            | -                | -                | -         |    -0.01 | bnc, ckzao, diozera, lash, zede |
|            1 |     4738 | 2025-07-09 | Crashers       | W   | 0.002      | 0.525        | 0.000 (0.000)    | 0.227 (0.000)    | 0 (0.000) |     0.03 | bnc, ckzao, diozera, lash, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
