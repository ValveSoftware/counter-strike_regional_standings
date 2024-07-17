### Roster Details<br />
Team Name: Fluxo Demons<br />
Roster: annaEX, goddess, julih, poppins, yungher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [89](../standings_global.md)<br />
Regional Rank: [21]( ../standings_americas.md)<br />
Final Rank Value:  936.6<br />
<br />
Final Rank Value (936.6) = Starting Rank Value (914.1) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.207[<sup>2</sup>](#table1)

The average of these factors is 0.239<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 914.1
- 400 + ( ( 0.239 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 914.1


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
|           12 |      884 | 2024-06-02 | Imperial fe     | L   | 0.900      | -            | -                | -                | -         |    -6.84 | annaEX, goddess, julih, poppins, yungher |
|           11 |      904 | 2024-06-01 | NAVI Javelins   | W   | 0.895      | 0.524        | 0.042 (0.020)    | 0.251 (0.118)    | 1 (0.895) |    14.02 | annaEX, goddess, julih, poppins, yungher |
|           10 |      938 | 2024-05-31 | Let Her Cook    | L   | 0.889      | -            | -                | -                | -         |   -11.68 | annaEX, goddess, julih, poppins, yungher |
|            9 |      943 | 2024-05-31 | TSM Shimmer     | W   | 0.888      | 0.524        | 0.028 (0.013)    | 0.217 (0.101)    | 1 (0.888) |     7.81 | annaEX, goddess, julih, poppins, yungher |
|            8 |     2016 | 2024-04-19 | FURIA fe        | W   | 0.609      | 0.332        | 0.006 (0.001)    | 0.107 (0.022)    | 0 (0.000) |     4.64 | annaEX, goddess, julih, poppins, yungher |
|            7 |     2279 | 2024-04-10 | GENKID4M4       | W   | 0.548      | 0.332        | 0.003 (0.001)    | 0.021 (0.004)    | 0 (0.000) |     2.78 | annaEX, goddess, julih, poppins, yungher |
|            6 |     2471 | 2024-04-04 | KG fe           | W   | 0.508      | 0.332        | 0.002 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     1.60 | annaEX, goddess, julih, poppins, yungher |
|            5 |     2644 | 2024-03-27 | Divina fe       | W   | 0.455      | 0.332        | 0.003 (0.000)    | 0.032 (0.005)    | 0 (0.000) |     2.73 | annaEX, goddess, julih, poppins, yungher |
|            4 |     2761 | 2024-03-20 | MIBR fe         | W   | 0.408      | 0.332        | 0.008 (0.001)    | 0.090 (0.012)    | 0 (0.000) |     2.84 | annaEX, goddess, julih, poppins, yungher |
|            3 |     2880 | 2024-03-14 | W7M fe          | W   | 0.368      | 0.332        | 0.003 (0.000)    | 0.049 (0.006)    | 0 (0.000) |     2.20 | annaEX, goddess, julih, poppins, yungher |
|            2 |     3084 | 2024-03-06 | Atrix           | W   | 0.316      | 0.332        | 0.005 (0.000)    | 0.082 (0.009)    | 0 (0.000) |     2.06 | annaEX, goddess, julih, poppins, yungher |
|            1 |     3746 | 2024-02-03 | Brasil Storm fe | W   | 0.102      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.30 | annaEX, goddess, josi, julih, yungher    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,797.48)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.902 | $13,000.00     | $11,720.71      |
| 2024-02-03 |      0.102 | $750.00        | $76.77          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
