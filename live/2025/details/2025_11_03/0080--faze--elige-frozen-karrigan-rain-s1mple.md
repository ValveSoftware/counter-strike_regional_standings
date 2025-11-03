### Roster Details<br />
Team Name: FaZe<br />
Roster: EliGE, frozen, karrigan, rain, s1mple<br />
Global Rank: [80](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [54]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  945.3<br />
<br />
Final Rank Value (945.3) = Starting Rank Value (902.4) + Head To Head Adjustments (42.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.472[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.149[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 902.4
- 400 + ( ( 0.268 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 902.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     3328 | 2025-06-20 | The MongolZ | L   | 0.295      | -            | -                | -                | -         |    -0.04 | EliGE, frozen, karrigan, rain, s1mple   |
|           12 |     3445 | 2025-06-14 | The MongolZ | W   | 0.254      | 1.000        | 1.000 (0.254)    | 0.487 (0.124)    | 1 (0.254) |     7.96 | EliGE, frozen, karrigan, rain, s1mple   |
|           11 |     3493 | 2025-06-13 | Legacy      | W   | 0.246      | 1.000        | 1.000 (0.246)    | 0.664 (0.163)    | 1 (0.246) |     7.72 | EliGE, frozen, karrigan, rain, s1mple   |
|           10 |     3510 | 2025-06-12 | MOUZ        | W   | 0.241      | 1.000        | 0.547 (0.132)    | 0.513 (0.124)    | 1 (0.241) |     7.51 | EliGE, frozen, karrigan, rain, s1mple   |
|            9 |     3520 | 2025-06-12 | Aurora      | L   | 0.240      | -            | -                | -                | -         |    -0.02 | EliGE, frozen, karrigan, rain, s1mple   |
|            8 |     3550 | 2025-06-10 | MIBR        | W   | 0.228      | 0.769        | 0.095 (0.017)    | 0.502 (0.088)    | 1 (0.228) |     6.73 | EliGE, frozen, karrigan, rain, s1mple   |
|            7 |     3566 | 2025-06-09 | 3DMAX       | L   | 0.222      | -            | -                | -                | -         |    -0.04 | EliGE, frozen, karrigan, rain, s1mple   |
|            6 |     3582 | 2025-06-08 | Legacy      | L   | 0.214      | -            | -                | -                | -         |    -0.03 | EliGE, frozen, karrigan, rain, s1mple   |
|            5 |     3597 | 2025-06-07 | TYLOO       | W   | 0.208      | 0.769        | 0.344 (0.055)    | 0.273 (0.044)    | 1 (0.208) |     6.17 | EliGE, frozen, karrigan, rain, s1mple   |
|            4 |     3610 | 2025-06-07 | HEROIC      | W   | 0.206      | 0.769        | 0.340 (0.054)    | 0.437 (0.069)    | 1 (0.206) |     6.40 | EliGE, frozen, karrigan, rain, s1mple   |
|            3 |     3812 | 2025-05-21 | HEROIC      | L   | 0.094      | -            | -                | -                | -         |    -0.04 | EliGE, frozen, karrigan, s1mple, skullz |
|            2 |     3842 | 2025-05-20 | BC.Game     | W   | 0.086      | 1.000        | 0.004 (0.000)    | 0.035 (0.003)    | 1 (0.086) |     0.56 | EliGE, frozen, karrigan, s1mple, skullz |
|            1 |     3869 | 2025-05-19 | Liquid      | L   | 0.080      | -            | -                | -                | -         |    -0.01 | EliGE, frozen, karrigan, s1mple, skullz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,888.24)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      0.308 | $45,000.00     | $13,854.45      |
| 2025-05-25 |      0.121 | $25,000.00     | $3,033.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
