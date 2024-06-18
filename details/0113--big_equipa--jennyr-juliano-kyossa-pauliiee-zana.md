### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, kyossa, pauliiee, Zana<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [113](../standings_global.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
Final Rank Value:  824.9<br />
<br />
Final Rank Value (824.9) = Starting Rank Value (806.2) + Head To Head Adjustments (18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 806.2
- 400 + ( ( 0.200 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 806.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      604 | 2024-06-01 | HSG fe            | L   | 1.000      | -            | -                | -                | -         |   -13.19 | JennyR, juliano, kyossa, pauliiee, Zana |
|           17 |      642 | 2024-05-31 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -5.95 | JennyR, juliano, kyossa, pauliiee, Zana |
|           16 |      653 | 2024-05-31 | FlyQuest RED      | W   | 1.000      | 0.524        | 0.027 (0.014)    | 0.216 (0.113)    | 1 (1.000) |    15.95 | JennyR, juliano, kyossa, pauliiee, Zana |
|           15 |      967 | 2024-05-19 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |   -12.02 | JennyR, juliano, kyossa, pauliiee, Zana |
|           14 |      994 | 2024-05-18 | Nemesis fe        | W   | 0.995      | 0.281        | -                | 0.000 (0.000)    | 0 (0.000) |     2.46 | JennyR, juliano, kyossa, pauliiee, Zana |
|           13 |     1680 | 2024-04-20 | Fearless Cheetahs | W   | 0.810      | 0.331        | 0.005 (0.001)    | 0.104 (0.028)    | 0 (0.000) |    10.11 | JennyR, juliano, kyossa, pauliiee, Zana |
|           12 |     1726 | 2024-04-19 | NIP Impact        | W   | 0.803      | 0.331        | 0.008 (0.002)    | 0.207 (0.055)    | 0 (0.000) |    10.68 | JennyR, juliano, kyossa, pauliiee, Zana |
|           11 |     2115 | 2024-04-07 | Imperial fe       | L   | 0.721      | -            | -                | -                | -         |    -3.94 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |     2130 | 2024-04-06 | Spirit fe         | W   | 0.714      | 0.262        | 0.005 (0.001)    | 0.054 (0.010)    | 0 (0.000) |     6.56 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |     2180 | 2024-04-04 | ENCE Athena       | W   | 0.703      | 0.331        | 0.004 (0.001)    | 0.077 (0.018)    | 0 (0.000) |     6.73 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |     2314 | 2024-03-28 | ex-GUILD fe       | L   | 0.656      | -            | -                | -                | -         |   -13.96 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     2589 | 2024-03-14 | Imperial fe       | L   | 0.563      | -            | -                | -                | -         |    -3.25 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     2797 | 2024-03-06 | Astralis W        | W   | 0.510      | 0.331        | 0.002 (0.000)    | 0.041 (0.007)    | 0 (0.000) |     4.12 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     2873 | 2024-03-03 | ex-FORZE Ladies   | W   | 0.490      | 0.250        | 0.005 (0.001)    | 0.053 (0.006)    | 0 (0.000) |     4.30 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     3015 | 2024-02-25 | NAVI Javelins     | L   | 0.442      | -            | -                | -                | -         |    -5.87 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     3020 | 2024-02-25 | Let Her Cook      | W   | 0.441      | 0.238        | 0.083 (0.009)    | 0.199 (0.021)    | 0 (0.000) |    10.12 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     3051 | 2024-02-24 | ex-GUILD fe       | W   | 0.435      | 0.238        | 0.005 (0.000)    | 0.114 (0.012)    | 0 (0.000) |     4.59 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     3584 | 2024-01-28 | QM fe             | W   | 0.256      | 0.250        | 0.000 (0.000)    | -                | -         |     1.28 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,559.27)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-03-03 |      0.490 | $750.00        | $367.44         |
| 2024-01-28 |      0.256 | $750.00        | $191.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
