### Roster Details<br />
Team Name: panelinha<br />
Roster: annaEX, goddess, josi, Le, yungher<br />
Global Rank: [118](../standings_global_2024_08_14.md)<br />
<br />
Region: [Americas]( ../standings_americas_2024_08_14.md)<br />
Regional Rank: [28]( ../standings_americas_2024_08_14.md)<br />
<br />
Final Rank Value:  808.0<br />
<br />
Final Rank Value (808.0) = Starting Rank Value (811.3) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.158[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 811.3
- 400 + ( ( 0.208 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 811.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      621 | 2024-07-27 | MIBR fe       | L   | 1.000      | -            | -                | -                | -         |   -21.11 | annaEX, goddess, josi, Le, yungher       |
|           11 |     1895 | 2024-06-02 | Imperial fe   | L   | 0.712      | -            | -                | -                | -         |    -6.25 | annaEX, goddess, julih, poppins, yungher |
|           10 |     1915 | 2024-06-01 | NAVI Javelins | W   | 0.707      | 0.524        | 0.024 (0.009)    | 0.158 (0.059)    | 1 (0.707) |    11.18 | annaEX, goddess, julih, poppins, yungher |
|            9 |     1949 | 2024-05-31 | Let Her Cook  | L   | 0.701      | -            | -                | -                | -         |    -9.44 | annaEX, goddess, julih, poppins, yungher |
|            8 |     1954 | 2024-05-31 | TSM Shimmer   | W   | 0.700      | 0.524        | 0.019 (0.007)    | 0.176 (0.065)    | 1 (0.700) |     7.57 | annaEX, goddess, julih, poppins, yungher |
|            7 |     3027 | 2024-04-19 | FURIA fe      | W   | 0.421      | 0.332        | 0.003 (0.000)    | 0.057 (0.008)    | 0 (0.000) |     3.83 | annaEX, goddess, julih, poppins, yungher |
|            6 |     3290 | 2024-04-10 | GENKID4M4     | W   | 0.360      | 0.332        | 0.002 (0.000)    | 0.005 (0.001)    | 0 (0.000) |     2.54 | annaEX, goddess, julih, poppins, yungher |
|            5 |     3482 | 2024-04-04 | KG fe         | W   | 0.320      | 0.332        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.58 | annaEX, goddess, julih, poppins, yungher |
|            4 |     3655 | 2024-03-27 | Divina fe     | W   | 0.267      | 0.332        | 0.002 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     2.10 | annaEX, goddess, julih, poppins, yungher |
|            3 |     3772 | 2024-03-20 | MIBR fe       | W   | 0.221      | 0.332        | 0.007 (0.000)    | 0.094 (0.007)    | 0 (0.000) |     2.21 | annaEX, goddess, julih, poppins, yungher |
|            2 |     3891 | 2024-03-14 | W7M fe        | W   | 0.181      | 0.332        | 0.002 (0.000)    | 0.025 (0.001)    | 0 (0.000) |     1.44 | annaEX, goddess, julih, poppins, yungher |
|            1 |     4095 | 2024-03-06 | Atrix         | W   | 0.128      | 0.332        | 0.002 (0.000)    | 0.048 (0.002)    | 0 (0.000) |     1.08 | annaEX, goddess, julih, poppins, yungher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,529.88)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-27 |      1.000 | $250.00        | $250.00         |
| 2024-06-02 |      0.714 | $13,000.00     | $9,279.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
