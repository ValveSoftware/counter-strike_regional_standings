### Roster Details<br />
Team Name: Fluxo Demons<br />
Roster: annaEX, goddess, julih, poppins, yungher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [93](../standings_global.md)<br />
Regional Rank: [23]( ../standings_americas.md)<br />
Final Rank Value:  889.5<br />
<br />
Final Rank Value (889.5) = Starting Rank Value (867.2) + Head To Head Adjustments (22.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.418[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.199[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 867.2
- 400 + ( ( 0.231 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 867.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1172 | 2024-06-02 | Imperial fe     | L   | 0.853      | -            | -                | -                | -         |    -6.89 | annaEX, goddess, julih, poppins, yungher |
|           11 |     1192 | 2024-06-01 | NAVI Javelins   | W   | 0.848      | 0.524        | 0.035 (0.015)    | 0.227 (0.101)    | 1 (0.848) |    13.33 | annaEX, goddess, julih, poppins, yungher |
|           10 |     1226 | 2024-05-31 | Let Her Cook    | L   | 0.841      | -            | -                | -                | -         |   -11.23 | annaEX, goddess, julih, poppins, yungher |
|            9 |     1231 | 2024-05-31 | TSM Shimmer     | W   | 0.841      | 0.524        | 0.023 (0.010)    | 0.199 (0.087)    | 1 (0.841) |     7.93 | annaEX, goddess, julih, poppins, yungher |
|            8 |     2304 | 2024-04-19 | FURIA fe        | W   | 0.561      | 0.332        | 0.005 (0.001)    | 0.094 (0.018)    | 0 (0.000) |     4.63 | annaEX, goddess, julih, poppins, yungher |
|            7 |     2567 | 2024-04-10 | GENKID4M4       | W   | 0.501      | 0.332        | 0.003 (0.000)    | 0.017 (0.003)    | 0 (0.000) |     2.89 | annaEX, goddess, julih, poppins, yungher |
|            6 |     2759 | 2024-04-04 | KG fe           | W   | 0.461      | 0.332        | 0.002 (0.000)    | 0.006 (0.001)    | 0 (0.000) |     1.74 | annaEX, goddess, julih, poppins, yungher |
|            5 |     2932 | 2024-03-27 | Divina fe       | W   | 0.408      | 0.332        | 0.002 (0.000)    | 0.027 (0.004)    | 0 (0.000) |     2.75 | annaEX, goddess, julih, poppins, yungher |
|            4 |     3049 | 2024-03-20 | MIBR fe         | W   | 0.361      | 0.332        | 0.007 (0.001)    | 0.082 (0.010)    | 0 (0.000) |     2.76 | annaEX, goddess, julih, poppins, yungher |
|            3 |     3168 | 2024-03-14 | W7M fe          | W   | 0.321      | 0.332        | 0.003 (0.000)    | 0.043 (0.005)    | 0 (0.000) |     2.16 | annaEX, goddess, julih, poppins, yungher |
|            2 |     3372 | 2024-03-06 | Atrix           | W   | 0.268      | 0.332        | 0.004 (0.000)    | 0.073 (0.007)    | 0 (0.000) |     1.95 | annaEX, goddess, julih, poppins, yungher |
|            1 |     4034 | 2024-02-03 | Brasil Storm fe | W   | 0.055      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.19 | annaEX, goddess, josi, julih, yungher    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,148.13)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.854 | $13,000.00     | $11,106.78      |
| 2024-02-03 |      0.055 | $750.00        | $41.35          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
