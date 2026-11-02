### Roster Details<br />
Team Name: DEPO<br />
Roster: dako, sh1seido, shoxs, w1nt3r, wetfy<br />
Global Rank: [281](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [35]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  591.2<br />
<br />
Final Rank Value (591.2) = Starting Rank Value (587.1) + Head To Head Adjustments (4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.221[<sup>1</sup>](#table2)
- Bounty Collected: 0.147[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

The average of these factors is 0.100<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 587.1
- 400 + ( ( 0.100 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 587.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5096 | 2026-05-30 | Omega      | L   | 0.160      | -            | -                | -                | -         |    -0.19 | dako, sh1seido, shoxs, w1nt3r, wetfy |
|            4 |     5111 | 2026-05-30 | HOTU       | L   | 0.158      | -            | -                | -                | -         |    -0.03 | dako, sh1seido, shoxs, w1nt3r, wetfy |
|            3 |     5135 | 2026-05-29 | Dark Moon  | W   | 0.153      | 0.354        | 0.000 (0.000)    | 0.083 (0.004)    | 1 (0.153) |     2.69 | dako, sh1seido, shoxs, w1nt3r, wetfy |
|            2 |     5142 | 2026-05-29 | Omega      | L   | 0.152      | -            | -                | -                | -         |    -0.18 | dako, sh1seido, shoxs, w1nt3r, wetfy |
|            1 |     5154 | 2026-05-29 | Game Point | W   | 0.151      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.151) |     1.79 | dako, sh1seido, shoxs, w1nt3r, wetfy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($166.08)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.166 | $1,000.00      | $166.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
