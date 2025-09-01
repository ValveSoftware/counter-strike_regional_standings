### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: Austin, ben1337, kmrn, ogwizard, sacrifice<br />
Global Rank: [159](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [47]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  659.9<br />
<br />
Final Rank Value (659.9) = Starting Rank Value (699.7) + Head To Head Adjustments (-39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.7
- 400 + ( ( 0.156 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 699.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      749 | 2025-07-27 | MIGHT          | L   | 0.961      | -            | -                | -                | -         |   -18.03 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           38 |      814 | 2025-07-24 | LAG            | L   | 0.943      | -            | -                | -                | -         |   -11.31 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           37 |     1077 | 2025-07-11 | LAG            | L   | 0.855      | -            | -                | -                | -         |   -10.28 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           36 |     1245 | 2025-06-25 | Getting Info   | L   | 0.749      | -            | -                | -                | -         |   -10.98 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           35 |     1342 | 2025-06-17 | Wanted Goons   | W   | 0.696      | 0.333        | -                | 0.152 (0.035)    | 0 (0.000) |     7.93 | ben1337, kmrn, ogwizard, sacrifice, Termina |
|           34 |     1375 | 2025-06-15 | MONEY CREW     | L   | 0.683      | -            | -                | -                | -         |   -12.23 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           33 |     1401 | 2025-06-14 | BOSS           | L   | 0.676      | -            | -                | -                | -         |   -10.08 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           32 |     1502 | 2025-06-11 | LAG            | W   | 0.656      | 0.333        | 0.015 (0.003)    | 0.542 (0.119)    | 0 (0.000) |    12.11 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           31 |     1517 | 2025-06-10 | girl kissers   | W   | 0.649      | -            | -                | -                | 0 (0.000) |     7.55 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|           30 |     2120 | 2025-05-07 | BLUEJAYS       | L   | 0.423      | -            | -                | -                | -         |    -5.26 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           29 |     2157 | 2025-05-06 | Akimbo         | W   | 0.416      | 0.477        | 0.005 (0.001)    | -                | 0 (0.000) |     5.38 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           28 |     2233 | 2025-05-03 | BLUEJAYS       | L   | 0.396      | -            | -                | -                | -         |    -4.96 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           27 |     2235 | 2025-05-03 | Getting Info   | L   | 0.395      | -            | -                | -                | -         |    -9.58 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           26 |     2240 | 2025-05-03 | BLUEJAYS       | W   | 0.394      | 0.303        | 0.008 (0.001)    | 0.200 (0.024)    | 0 (0.000) |     7.43 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           25 |     2775 | 2025-04-08 | Getting Info   | L   | 0.229      | -            | -                | -                | -         |    -2.67 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           24 |     2779 | 2025-04-08 | Getting Info   | L   | 0.229      | -            | -                | -                | -         |    -2.72 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           23 |     2817 | 2025-04-08 | Legacy         | W   | 0.225      | 0.477        | 0.091 (0.010)    | 0.732 (0.078)    | 0 (0.000) |     6.82 | ben1337, d4rty, ogwizard, sacrifice, viz    |
|           22 |     2818 | 2025-04-08 | Legacy         | W   | 0.225      | 0.477        | 0.091 (0.010)    | 0.732 (0.078)    | 0 (0.000) |     6.84 | ben1337, d4rty, ogwizard, sacrifice, viz    |
|           21 |     2824 | 2025-04-07 | BLUEJAYS       | L   | 0.223      | -            | -                | -                | -         |    -1.07 | ben1337, d4rty, ogwizard, sacrifice, viz    |
|           20 |     2827 | 2025-04-07 | BLUEJAYS       | L   | 0.223      | -            | -                | -                | -         |    -1.08 | ben1337, d4rty, ogwizard, sacrifice, viz    |
|           19 |     2892 | 2025-04-03 | Chicken Coop   | L   | 0.196      | -            | -                | -                | -         |    -2.41 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           18 |     2896 | 2025-04-03 | Chicken Coop   | L   | 0.196      | -            | -                | -                | -         |    -2.45 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           17 |     2937 | 2025-04-02 | Marsborne      | W   | 0.190      | 0.477        | 0.010 (0.001)    | 0.608 (0.055)    | 0 (0.000) |     4.30 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           16 |     2947 | 2025-04-02 | Marsborne      | L   | 0.189      | -            | -                | -                | -         |    -1.68 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           15 |     3007 | 2025-04-01 | InControl      | W   | 0.183      | 0.477        | 0.002 (0.000)    | -                | 0 (0.000) |     3.04 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           14 |     3011 | 2025-04-01 | InControl      | L   | 0.183      | -            | -                | -                | -         |    -2.75 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           13 |     3065 | 2025-03-30 | BLUEJAYS       | L   | 0.169      | -            | -                | -                | -         |    -0.84 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           12 |     3095 | 2025-03-29 | Legacy Kingdom | W   | 0.163      | 0.769        | -                | 0.259 (0.033)    | 0 (0.000) |     2.25 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           11 |     3116 | 2025-03-29 | Wanted Goons   | W   | 0.162      | -            | -                | -                | -         |     1.90 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|           10 |     3174 | 2025-03-28 | Arrival Seven  | W   | 0.156      | 0.769        | 0.005 (0.001)    | 0.200 (0.024)    | -         |     2.55 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|            9 |     3242 | 2025-03-27 | NRG            | L   | 0.149      | -            | -                | -                | -         |    -0.36 | ben1337, d4rty, ogwizard, sacrifice, xsany  |
|            8 |     3455 | 2025-03-21 | BLUEJAYS       | L   | 0.110      | -            | -                | -                | -         |    -1.46 | ben1337, d4rty, FaNg, ogwizard, sacrifice   |
|            7 |     3456 | 2025-03-21 | BLUEJAYS       | L   | 0.110      | -            | -                | -                | -         |    -1.47 | ben1337, d4rty, FaNg, ogwizard, sacrifice   |
|            6 |     3492 | 2025-03-19 | NRG            | W   | 0.096      | 0.477        | 0.073 (0.003)    | 0.735 (0.034)    | -         |     2.81 | ben1337, d4rty, FaNg, ogwizard, sacrifice   |
|            5 |     3501 | 2025-03-19 | NRG            | W   | 0.096      | 0.477        | 0.073 (0.003)    | 0.735 (0.034)    | -         |     2.81 | ben1337, d4rty, FaNg, ogwizard, sacrifice   |
|            4 |     3827 | 2025-03-08 | BLUEJAYS       | L   | 0.023      | -            | -                | -                | -         |    -0.30 | ben1337, d4rty, FaNg, ogwizard, sacrifice   |
|            3 |     3905 | 2025-03-07 | BLUEJAYS       | W   | 0.016      | -            | -                | -                | -         |     0.29 | ben1337, d4rty, FaNg, ogwizard, sacrifice   |
|            2 |     3968 | 2025-03-06 | Aether         | W   | 0.010      | -            | -                | -                | -         |     0.13 | ben1337, d4rty, FaNg, ogwizard, sacrifice   |
|            1 |     4014 | 2025-03-05 | NuTorious      | W   | 0.003      | -            | -                | -                | -         |     0.02 | ben1337, d4rty, FaNg, ogwizard, sacrifice   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,348.65)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.450 | $3,000.00      | $1,348.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
