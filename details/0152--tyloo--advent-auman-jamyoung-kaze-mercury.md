### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, aumaN, JamYoung, kaze, Mercury<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [152](../standings_global.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
Final Rank Value:  709.8<br />
<br />
Final Rank Value (709.8) = Starting Rank Value (703.5) + Head To Head Adjustments (6.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.5
- 400 + ( ( 0.144 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 703.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     3121 | 2024-02-27 | ATOX               | L   | 0.297      | -            | -                | -                | -         |    -1.96 | advent, aumaN, JamYoung, kaze, Mercury |
|           17 |     3133 | 2024-02-26 | Lynn Vision        | L   | 0.290      | -            | -                | -                | -         |    -0.78 | advent, aumaN, JamYoung, kaze, Mercury |
|           16 |     3135 | 2024-02-25 | JiJieHao           | W   | 0.290      | 0.143        | 0.000 (0.000)    | 0.069 (0.003)    | 1 (0.290) |     1.51 | advent, aumaN, JamYoung, kaze, Mercury |
|           15 |     3639 | 2024-02-02 | Rare Atom          | L   | 0.132      | -            | -                | -                | -         |    -2.23 | advent, aumaN, JamYoung, kaze, Mercury |
|           14 |     3669 | 2024-02-01 | Newhappy           | W   | 0.125      | 0.143        | 0.000 (0.000)    | 0.038 (0.001)    | 0 (0.000) |     1.02 | advent, aumaN, JamYoung, kaze, Mercury |
|           13 |     3671 | 2024-02-01 | GR                 | W   | 0.124      | 0.143        | 0.012 (0.000)    | 0.078 (0.001)    | 0 (0.000) |     1.88 | advent, aumaN, JamYoung, kaze, Mercury |
|           12 |     3725 | 2024-01-27 | Lynn Vision        | L   | 0.097      | -            | -                | -                | -         |    -0.24 | advent, aumaN, JamYoung, kaze, Mercury |
|           11 |     3734 | 2024-01-27 | The MongolZ        | W   | 0.092      | 0.143        | 1.000 (0.013)    | 0.692 (0.009)    | 0 (0.000) |     2.91 | advent, aumaN, JamYoung, kaze, Mercury |
|           10 |     3738 | 2024-01-27 | The Huns           | W   | 0.091      | 0.143        | 0.000 (0.000)    | 0.024 (0.000)    | 0 (0.000) |     0.71 | advent, aumaN, JamYoung, kaze, Mercury |
|            9 |     3741 | 2024-01-26 | ACME               | W   | 0.090      | 0.435        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.090) |     1.03 | advent, aumaN, JamYoung, kaze, Mercury |
|            8 |     3752 | 2024-01-26 | The MongolZ        | L   | 0.086      | -            | -                | -                | -         |    -0.00 | advent, aumaN, JamYoung, kaze, Mercury |
|            7 |     3756 | 2024-01-26 | Wings Up           | W   | 0.085      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     0.65 | advent, aumaN, JamYoung, kaze, Mercury |
|            6 |     3763 | 2024-01-26 | The MongolZ        | L   | 0.084      | -            | -                | -                | -         |    -0.00 | advent, aumaN, JamYoung, kaze, Mercury |
|            5 |     3765 | 2024-01-25 | Incheon On Sla2ers | W   | 0.083      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.083) |     0.69 | advent, aumaN, JamYoung, kaze, Mercury |
|            4 |     3867 | 2024-01-21 | Rare Atom          | W   | 0.052      | 0.143        | 0.007 (0.000)    | 0.030 (0.000)    | 0 (0.000) |     0.77 | advent, aumaN, JamYoung, kaze, Mercury |
|            3 |     3876 | 2024-01-20 | Lynn Vision        | L   | 0.050      | -            | -                | -                | -         |    -0.12 | advent, aumaN, JamYoung, kaze, Mercury |
|            2 |     3974 | 2024-01-19 | Newhappy           | W   | 0.037      | 0.143        | 0.000 (0.000)    | 0.038 (0.000)    | 0 (0.000) |     0.32 | advent, aumaN, JamYoung, kaze, Mercury |
|            1 |     3988 | 2024-01-18 | SHPL               | W   | 0.036      | -            | -                | -                | -         |     0.18 | advent, aumaN, JamYoung, kaze, Mercury |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($394.04)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
