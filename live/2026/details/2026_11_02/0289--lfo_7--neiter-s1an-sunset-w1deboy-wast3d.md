### Roster Details<br />
Team Name: LFO 7<br />
Roster: neiter, s1an, SUNsET, w1deboy, wast3d<br />
Global Rank: [289](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [194]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  582.0<br />
<br />
Final Rank Value (582.0) = Starting Rank Value (589.1) + Head To Head Adjustments (-7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.157[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 589.1
- 400 + ( ( 0.101 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 589.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2199 | 2026-09-11 | NEXORA     | L   | 0.854      | -            | -                | -                | -         |    -9.40 | neiter, s1an, SUNsET, w1deboy, wast3d |
|            4 |     2333 | 2026-09-09 | BOJONG     | W   | 0.840      | 0.357        | 0.000 (0.000)    | 0.027 (0.008)    | 0 (0.000) |     6.59 | neiter, s1an, SUNsET, w1deboy, wast3d |
|            3 |     3408 | 2026-08-09 | B8 Academy | L   | 0.633      | -            | -                | -                | -         |    -9.06 | neiter, s1an, SUNsET, w1deboy, wast3d |
|            2 |     3423 | 2026-08-09 | Anteiku    | W   | 0.632      | 0.274        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.52 | neiter, s1an, SUNsET, w1deboy, wast3d |
|            1 |     5054 | 2026-05-31 | ZOTIX      | L   | 0.166      | -            | -                | -                | -         |    -2.73 | neiter, s1an, SUNsET, w1deboy, wast3d |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($463.45)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-09 |      0.633 | $672.00        | $425.55         |
| 2026-05-31 |      0.167 | $227.00        | $37.90          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
