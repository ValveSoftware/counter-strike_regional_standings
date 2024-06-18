### Roster Details<br />
Team Name: Fluxo Demons<br />
Roster: annaEX, goddess, julih, poppins, yungher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [89](../standings_global.md)<br />
Regional Rank: [21]( ../standings_americas.md)<br />
Final Rank Value:  923.7<br />
<br />
Final Rank Value (923.7) = Starting Rank Value (892.4) + Head To Head Adjustments (31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.424[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.208[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 892.4
- 400 + ( ( 0.242 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 892.4


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
|           12 |      584 | 2024-06-02 | Imperial fe     | L   | 1.000      | -            | -                | -                | -         |    -8.40 | annaEX, goddess, julih, poppins, yungher |
|           11 |      606 | 2024-06-01 | NAVI Javelins   | W   | 1.000      | 0.524        | 0.041 (0.021)    | 0.290 (0.152)    | 1 (1.000) |    16.15 | annaEX, goddess, julih, poppins, yungher |
|           10 |      640 | 2024-05-31 | Let Her Cook    | L   | 1.000      | -            | -                | -                | -         |   -14.16 | annaEX, goddess, julih, poppins, yungher |
|            9 |      645 | 2024-05-31 | TSM Shimmer     | W   | 1.000      | 0.524        | 0.027 (0.014)    | 0.270 (0.141)    | 1 (1.000) |     8.63 | annaEX, goddess, julih, poppins, yungher |
|            8 |     1718 | 2024-04-19 | FURIA fe        | W   | 0.804      | 0.332        | 0.007 (0.002)    | 0.134 (0.036)    | 0 (0.000) |     6.68 | annaEX, goddess, julih, poppins, yungher |
|            7 |     1981 | 2024-04-10 | GENKID4M4       | W   | 0.743      | 0.332        | 0.003 (0.001)    | 0.032 (0.008)    | 0 (0.000) |     3.77 | annaEX, goddess, julih, poppins, yungher |
|            6 |     2173 | 2024-04-04 | KG fe           | W   | 0.703      | 0.332        | 0.003 (0.001)    | 0.014 (0.003)    | 0 (0.000) |     2.21 | annaEX, goddess, julih, poppins, yungher |
|            5 |     2347 | 2024-03-27 | Divina fe       | W   | 0.650      | 0.332        | 0.003 (0.001)    | 0.041 (0.009)    | 0 (0.000) |     4.09 | annaEX, goddess, julih, poppins, yungher |
|            4 |     2464 | 2024-03-20 | MIBR fe         | W   | 0.604      | 0.332        | 0.008 (0.002)    | 0.104 (0.021)    | 0 (0.000) |     4.39 | annaEX, goddess, julih, poppins, yungher |
|            3 |     2583 | 2024-03-14 | W7M fe          | W   | 0.564      | 0.332        | 0.003 (0.001)    | 0.063 (0.012)    | 0 (0.000) |     3.49 | annaEX, goddess, julih, poppins, yungher |
|            2 |     2787 | 2024-03-06 | Atrix           | W   | 0.511      | 0.332        | 0.005 (0.001)    | 0.098 (0.017)    | 0 (0.000) |     3.51 | annaEX, goddess, julih, poppins, yungher |
|            1 |     3449 | 2024-02-03 | Brasil Storm fe | W   | 0.298      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.99 | annaEX, goddess, josi, julih, yungher    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,223.23)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $13,000.00     | $13,000.00      |
| 2024-02-03 |      0.298 | $750.00        | $223.23         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
