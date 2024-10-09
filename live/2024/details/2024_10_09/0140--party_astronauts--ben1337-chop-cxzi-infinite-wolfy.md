### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, chop, cxzi, Infinite, WolfY<br />
Global Rank: [140](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_09.md)<br />
Regional Rank: [36]( ../../standings_americas_2024_10_09.md)<br />
<br />
Final Rank Value:  735.8<br />
<br />
Final Rank Value (735.8) = Starting Rank Value (713.5) + Head To Head Adjustments (22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.5
- 400 + ( ( 0.162 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 713.5


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
|           19 |     4166 | 2024-05-18 | NRG           | L   | 0.241      | -            | -                | -                | -         |    -2.06 | ben1337, chop, cxzi, Infinite, WolfY |
|           18 |     4198 | 2024-05-17 | Legacy        | W   | 0.236      | 0.303        | 0.066 (0.005)    | 0.700 (0.050)    | 0 (0.000) |     5.62 | ben1337, chop, cxzi, Infinite, WolfY |
|           17 |     4227 | 2024-05-16 | FLUFFY AIMERS | W   | 0.230      | 0.477        | 0.016 (0.002)    | 0.516 (0.056)    | 0 (0.000) |     4.52 | ben1337, chop, cxzi, Infinite, WolfY |
|           16 |     4230 | 2024-05-16 | FLUFFY AIMERS | W   | 0.229      | 0.477        | 0.016 (0.002)    | 0.516 (0.056)    | 0 (0.000) |     4.60 | ben1337, chop, cxzi, Infinite, WolfY |
|           15 |     4320 | 2024-05-14 | Mythic        | W   | 0.216      | 0.477        | 0.005 (0.001)    | 0.269 (0.028)    | 0 (0.000) |     3.77 | ben1337, chop, cxzi, RUSH, WolfY     |
|           14 |     4328 | 2024-05-14 | Mythic        | L   | 0.216      | -            | -                | -                | -         |    -3.08 | ben1337, chop, cxzi, RUSH, WolfY     |
|           13 |     4421 | 2024-05-11 | BOSS          | L   | 0.195      | -            | -                | -                | -         |    -2.10 | ben1337, chop, cxzi, RUSH, WolfY     |
|           12 |     4427 | 2024-05-11 | Phoenix       | L   | 0.194      | -            | -                | -                | -         |    -3.51 | ben1337, chop, cxzi, RUSH, WolfY     |
|           11 |     4483 | 2024-05-08 | LAG           | W   | 0.176      | 0.477        | 0.004 (0.000)    | 0.058 (0.005)    | 0 (0.000) |     2.15 | ben1337, chop, cxzi, RUSH, WolfY     |
|           10 |     4488 | 2024-05-08 | LAG           | W   | 0.176      | 0.477        | 0.004 (0.000)    | 0.058 (0.005)    | 0 (0.000) |     2.18 | ben1337, chop, cxzi, RUSH, WolfY     |
|            9 |     4508 | 2024-05-07 | timbermen     | L   | 0.170      | -            | -                | -                | -         |    -0.71 | ben1337, chop, cxzi, RUSH, WolfY     |
|            8 |     4509 | 2024-05-07 | timbermen     | W   | 0.170      | 0.477        | 0.030 (0.002)    | 0.534 (0.043)    | 0 (0.000) |     4.66 | ben1337, chop, cxzi, RUSH, WolfY     |
|            7 |     4527 | 2024-05-06 | NRG           | L   | 0.163      | -            | -                | -                | -         |    -1.40 | ben1337, chop, cxzi, RUSH, WolfY     |
|            6 |     4528 | 2024-05-06 | NRG           | W   | 0.163      | 0.477        | 0.037 (0.003)    | 0.523 (0.041)    | 0 (0.000) |     3.76 | ben1337, chop, cxzi, RUSH, WolfY     |
|            5 |     4599 | 2024-05-02 | Wildcard      | L   | 0.136      | -            | -                | -                | -         |    -0.41 | ben1337, chop, cxzi, RUSH, WolfY     |
|            4 |     4600 | 2024-05-02 | Wildcard      | W   | 0.136      | 0.477        | 0.114 (0.007)    | 0.572 (0.037)    | 0 (0.000) |     3.88 | ben1337, chop, cxzi, RUSH, WolfY     |
|            3 |     4736 | 2024-04-27 | Aurora        | L   | 0.098      | -            | -                | -                | -         |    -0.17 | ben1337, chop, cxzi, RUSH, WolfY     |
|            2 |     4738 | 2024-04-26 | sunday school | W   | 0.097      | 0.500        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.097) |     0.76 | ben1337, chop, cxzi, RUSH, WolfY     |
|            1 |     4764 | 2024-04-25 | Aurora        | L   | 0.089      | -            | -                | -                | -         |    -0.15 | ben1337, chop, cxzi, RUSH, WolfY     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,042.85)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.390 | $7,000.00      | $2,727.40       |
| 2024-04-28 |      0.105 | $3,000.00      | $315.45         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
