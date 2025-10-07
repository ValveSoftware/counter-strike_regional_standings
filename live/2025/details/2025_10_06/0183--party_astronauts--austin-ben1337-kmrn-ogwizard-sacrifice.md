### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: Austin, ben1337, kmrn, ogwizard, sacrifice<br />
Global Rank: [183](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [50]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  611.4<br />
<br />
Final Rank Value (611.4) = Starting Rank Value (642.8) + Head To Head Adjustments (-31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.8
- 400 + ( ( 0.124 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 642.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1880 | 2025-07-27 | MIGHT        | L   | 0.728      | -            | -                | -                | -         |   -15.04 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           13 |     1945 | 2025-07-24 | LAG          | L   | 0.710      | -            | -                | -                | -         |    -7.91 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           12 |     2208 | 2025-07-11 | LAG          | L   | 0.622      | -            | -                | -                | -         |    -7.07 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           11 |     2376 | 2025-06-25 | Getting Info | L   | 0.516      | -            | -                | -                | -         |    -6.92 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           10 |     2473 | 2025-06-17 | Wanted Goons | W   | 0.463      | 0.333        | 0.000 (0.000)    | 0.220 (0.034)    | 0 (0.000) |     5.02 | ben1337, kmrn, ogwizard, sacrifice, Termina |
|            9 |     2506 | 2025-06-15 | MONEY CREW   | L   | 0.450      | -            | -                | -                | -         |    -6.87 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            8 |     2532 | 2025-06-14 | BOSS         | L   | 0.443      | -            | -                | -                | -         |    -4.97 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            7 |     2633 | 2025-06-11 | LAG          | W   | 0.423      | 0.333        | 0.014 (0.002)    | 0.600 (0.085)    | 0 (0.000) |     8.48 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            6 |     2648 | 2025-06-10 | Nocturnal    | W   | 0.416      | 0.333        | 0.000 (0.000)    | 0.096 (0.013)    | 0 (0.000) |     5.22 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            5 |     3251 | 2025-05-07 | BLUEJAYS     | L   | 0.190      | -            | -                | -                | -         |    -2.67 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|            4 |     3288 | 2025-05-06 | Akimbo       | W   | 0.183      | 0.477        | 0.004 (0.000)    | 0.039 (0.003)    | 0 (0.000) |     2.11 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|            3 |     3364 | 2025-05-03 | BLUEJAYS     | L   | 0.163      | -            | -                | -                | -         |    -2.30 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|            2 |     3366 | 2025-05-03 | Getting Info | L   | 0.162      | -            | -                | -                | -         |    -1.28 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|            1 |     3371 | 2025-05-03 | BLUEJAYS     | W   | 0.161      | 0.303        | 0.004 (0.000)    | 0.045 (0.002)    | 0 (0.000) |     2.81 | ben1337, d4rty, ogwizard, sacrifice, xsany  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($648.84)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.216 | $3,000.00      | $648.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
