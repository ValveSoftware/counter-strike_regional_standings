### Roster Details<br />
Team Name: 1win<br />
Roster: cronuss, Goody, HObbit, lattykk, oz1k<br />
Global Rank: [105](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [69]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  769.6<br />
<br />
Final Rank Value (769.6) = Starting Rank Value (787.2) + Head To Head Adjustments (-17.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.173[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.2
- 400 + ( ( 0.208 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 787.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      572 | 2025-05-21 | ENCE               | L   | 0.886      | -            | -                | -                | -         |    -3.05 | cronuss, Goody, HObbit, lattykk, oz1k |
|           14 |      598 | 2025-05-20 | kONO               | W   | 0.879      | 0.389        | 0.000 (0.000)    | 0.079 (0.027)    | 0 (0.000) |     6.17 | cronuss, Goody, HObbit, lattykk, oz1k |
|           13 |      731 | 2025-05-14 | Imperial Valkyries | W   | 0.839      | 0.389        | 0.057 (0.019)    | 0.149 (0.049)    | 0 (0.000) |    14.35 | cronuss, Goody, HObbit, lattykk, oz1k |
|           12 |      917 | 2025-05-07 | ARCRED             | L   | 0.794      | -            | -                | -                | -         |    -7.87 | cronuss, Goody, HObbit, lattykk, oz1k |
|           11 |      924 | 2025-05-07 | Hesta              | L   | 0.792      | -            | -                | -                | -         |   -18.88 | cronuss, Goody, HObbit, lattykk, oz1k |
|           10 |      946 | 2025-05-06 | GUN5               | W   | 0.787      | 0.435        | 0.034 (0.012)    | 0.655 (0.224)    | 1 (0.787) |    18.39 | cronuss, Goody, HObbit, lattykk, oz1k |
|            9 |      986 | 2025-05-05 | inputprayers       | W   | 0.779      | 0.435        | 0.000 (0.000)    | 0.107 (0.036)    | 1 (0.779) |     5.97 | cronuss, Goody, HObbit, lattykk, oz1k |
|            8 |     1108 | 2025-04-30 | ECLOT              | L   | 0.745      | -            | -                | -                | -         |    -5.34 | cronuss, Goody, HObbit, klain, oz1k   |
|            7 |     1674 | 2025-04-04 | CYBERSHOKE         | L   | 0.572      | -            | -                | -                | -         |    -4.91 | cronuss, Goody, HObbit, klain, oz1k   |
|            6 |     1704 | 2025-04-03 | inputprayers       | L   | 0.566      | -            | -                | -                | -         |   -13.90 | cronuss, Goody, HObbit, klain, oz1k   |
|            5 |     1835 | 2025-03-31 | Astrum             | W   | 0.547      | 0.143        | 0.044 (0.003)    | 0.927 (0.072)    | 0 (0.000) |    13.20 | cronuss, Goody, HObbit, klain, oz1k   |
|            4 |     2641 | 2025-03-08 | Mousquetaires      | L   | 0.394      | -            | -                | -                | -         |   -10.22 | cronuss, HObbit, klain, oz1k, SANJI   |
|            3 |     2784 | 2025-03-06 | ex-SABRE           | L   | 0.380      | -            | -                | -                | -         |    -6.53 | cronuss, HObbit, klain, oz1k, SANJI   |
|            2 |     2841 | 2025-03-04 | Leo                | W   | 0.367      | 0.372        | 0.000 (0.000)    | 0.394 (0.054)    | 0 (0.000) |     2.83 | cronuss, HObbit, klain, oz1k, SANJI   |
|            1 |     3156 | 2025-02-21 | Dark Cloud         | L   | 0.293      | -            | -                | -                | -         |    -7.77 | cronuss, HObbit, klain, oz1k, sh1geo  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,994.19)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-08 |      0.799 | $5,000.00      | $3,994.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
