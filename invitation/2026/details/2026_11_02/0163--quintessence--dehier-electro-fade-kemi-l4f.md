### Roster Details<br />
Team Name: Quintessence<br />
Roster: dehier, Electro, fade, kemi, L4F<br />
Global Rank: [163](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [115]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  785.9<br />
<br />
Final Rank Value (785.9) = Starting Rank Value (687.3) + Head To Head Adjustments (98.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.3
- 400 + ( ( 0.153 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 687.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      208 | 2026-10-25 | DONSTU        | W   | 1.000      | 0.303        | 0.005 (0.002)    | 0.293 (0.089)    | 0 (0.000) |    15.40 | dehier, Electro, fade, kemi, L4F   |
|            8 |      218 | 2026-10-25 | TitanFlow     | W   | 1.000      | 0.303        | 0.002 (0.001)    | 0.186 (0.056)    | 0 (0.000) |    14.47 | dehier, Electro, fade, kemi, L4F   |
|            7 |      252 | 2026-10-24 | DONSTU        | L   | 1.000      | -            | -                | -                | -         |   -15.46 | dehier, Electro, fade, kemi, L4F   |
|            6 |      309 | 2026-10-22 | Ryvex         | W   | 1.000      | 0.303        | 0.005 (0.001)    | 0.257 (0.078)    | 0 (0.000) |    16.04 | dehier, Electro, fade, kemi, L4F   |
|            5 |      461 | 2026-10-19 | Falcons Force | W   | 1.000      | 0.303        | 0.002 (0.001)    | 0.479 (0.145)    | 0 (0.000) |    21.42 | dehier, Electro, fade, kemi, L4F   |
|            4 |      519 | 2026-10-18 | benched gods  | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.484 (0.146)    | 0 (0.000) |    17.92 | dehier, Electro, fade, kemi, L4F   |
|            3 |     2099 | 2026-09-13 | TitanFlow     | W   | 0.867      | 0.278        | 0.002 (0.001)    | 0.186 (0.045)    | 0 (0.000) |    12.05 | dehier, fade, kemi, L4F, mucalteeN |
|            2 |     2158 | 2026-09-12 | TitanFlow     | W   | 0.860      | 0.278        | 0.002 (0.000)    | 0.186 (0.044)    | 0 (0.000) |    12.40 | dehier, fade, kemi, L4F, mucalteeN |
|            1 |     2258 | 2026-09-10 | gothboiclique | W   | 0.848      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.38 | dehier, fade, kemi, L4F, mucalteeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,084.29)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-25 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-09-13 |      0.867 | $1,250.00      | $1,084.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
