### Roster Details<br />
Team Name: Betera<br />
Roster: El1an, MaSvAl, OWNER, sh1nejezzz, supra<br />
Global Rank: [163](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [109]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  698.1<br />
<br />
Final Rank Value (698.1) = Starting Rank Value (686.7) + Head To Head Adjustments (11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.7
- 400 + ( ( 0.150 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 686.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       34 | 2024-12-15 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |    -6.50 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |
|           14 |       57 | 2024-12-14 | JiJieHao          | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.156 (0.022)    | 0 (0.000) |    17.08 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |
|           13 |       82 | 2024-12-13 | Fire Flux         | L   | 1.000      | -            | -                | -                | -         |    -6.44 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |
|           12 |      305 | 2024-12-02 | FLuffy Gangsters  | L   | 1.000      | -            | -                | -                | -         |   -11.74 | El1an, MaSvAl, OWNER, sh1nejezzz, tENZY       |
|           11 |     1647 | 2024-10-02 | Apogee            | L   | 0.687      | -            | -                | -                | -         |    -5.56 | El1an, MaSvAl, OWNER, sh1nejezzz, tripex17    |
|           10 |     1691 | 2024-10-01 | GUN5              | L   | 0.681      | -            | -                | -                | -         |    -2.60 | El1an, MaSvAl, OWNER, sh1nejezzz, tripex17    |
|            9 |     2333 | 2024-09-12 | Rebels            | W   | 0.554      | 0.500        | 0.034 (0.009)    | 0.405 (0.112)    | 0 (0.000) |    12.87 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |
|            8 |     2543 | 2024-09-05 | EYEBALLERS        | W   | 0.506      | 0.500        | 0.014 (0.004)    | 0.423 (0.107)    | 0 (0.000) |    10.06 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |
|            7 |     3278 | 2024-08-15 | Gaimin Gladiators | L   | 0.366      | -            | -                | -                | -         |    -2.31 | El1an, OWNER, Sdaim, sh1nejezzz, supra        |
|            6 |     3575 | 2024-08-06 | TSM               | L   | 0.306      | -            | -                | -                | -         |    -2.12 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |
|            5 |     3627 | 2024-08-04 | PARIVISION        | W   | 0.294      | 0.500        | 0.026 (0.004)    | 0.368 (0.054)    | 0 (0.000) |     7.50 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |
|            4 |     3742 | 2024-08-01 | 3DMAX             | L   | 0.273      | -            | -                | -                | -         |    -0.09 | El1an, lollipop21k, MaSvAl, OWNER, sh1nejezzz |
|            3 |     4062 | 2024-07-23 | 9 Pandas          | L   | 0.214      | -            | -                | -                | -         |    -0.52 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |
|            2 |     4362 | 2024-07-16 | GUN5              | W   | 0.167      | 0.500        | 0.162 (0.013)    | 1.000 (0.083)    | 0 (0.000) |     4.66 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |
|            1 |     4410 | 2024-07-15 | Qiang             | L   | 0.160      | -            | -                | -                | -         |    -2.78 | El1an, MaSvAl, OWNER, sh1nejezzz, supra       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($806.18)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
