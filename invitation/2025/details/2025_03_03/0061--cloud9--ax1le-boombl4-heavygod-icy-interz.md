### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [61](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [43]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  877.8<br />
<br />
Final Rank Value (877.8) = Starting Rank Value (840.1) + Head To Head Adjustments (37.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.243[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 840.1
- 400 + ( ( 0.228 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 840.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     1166 | 2024-12-02 | Complexity      | L   | 0.591      | -            | -                | -                | -         |    -4.17 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     1186 | 2024-11-30 | paiN            | L   | 0.583      | -            | -                | -                | -         |    -0.54 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     1215 | 2024-11-30 | fnatic          | W   | 0.578      | 0.143        | 0.064 (0.005)    | 0.524 (0.043)    | 1 (0.578) |    13.02 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     1220 | 2024-11-29 | Liquid          | L   | 0.577      | -            | -                | -                | -         |    -0.73 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     1420 | 2024-11-19 | FaZe            | L   | 0.506      | -            | -                | -                | -         |    -0.05 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     1426 | 2024-11-18 | SINNERS         | W   | 0.503      | 0.143        | 0.026 (0.002)    | 0.503 (0.036)    | 1 (0.503) |     8.81 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     1439 | 2024-11-17 | HEROIC          | W   | 0.496      | 0.143        | 0.129 (0.009)    | 0.509 (0.036)    | 1 (0.496) |    11.42 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     1450 | 2024-11-17 | Nemiga          | W   | 0.492      | 0.143        | 0.171 (0.012)    | 0.380 (0.027)    | 1 (0.492) |    11.32 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     1463 | 2024-11-16 | FaZe            | L   | 0.490      | -            | -                | -                | -         |    -0.04 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     1993 | 2024-10-25 | fnatic          | L   | 0.339      | -            | -                | -                | -         |    -2.77 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     2021 | 2024-10-22 | 9z              | W   | 0.320      | 0.477        | 0.015 (0.002)    | 0.151 (0.023)    | 0 (0.000) |     3.99 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     2027 | 2024-10-22 | The MongolZ     | L   | 0.318      | -            | -                | -                | -         |    -0.03 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     2246 | 2024-10-11 | Passion UA      | L   | 0.245      | -            | -                | -                | -         |    -2.24 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     3232 | 2024-09-13 | Tricked         | L   | 0.059      | -            | -                | -                | -         |    -1.01 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     3396 | 2024-09-07 | Zero Tenacity   | W   | 0.020      | 0.384        | 0.026 (0.000)    | 0.603 (0.005)    | 0 (0.000) |     0.31 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     3420 | 2024-09-06 | BetBoom         | W   | 0.013      | 0.384        | 0.102 (0.001)    | 0.479 (0.002)    | 0 (0.000) |     0.28 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     3467 | 2024-09-05 | ALTERNATE aTTaX | W   | 0.006      | 0.384        | 0.020 (0.000)    | 0.371 (0.001)    | 0 (0.000) |     0.10 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,376.26)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.598 | $10,000.00     | $5,984.12       |
| 2024-09-07 |      0.020 | $20,000.00     | $392.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
