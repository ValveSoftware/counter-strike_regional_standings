### Roster Details<br />
Team Name: 1WIN<br />
Roster: buster, Jyo, lattykk, neaLaN, Ryujin<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [65](../standings_global.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
Final Rank Value:  1031.5<br />
<br />
Final Rank Value (1031.5) = Starting Rank Value (962.4) + Head To Head Adjustments (69.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.437[<sup>2</sup>](#table1)
- Opponent Network: 0.210[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 962.4
- 400 + ( ( 0.267 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 962.4


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
|           34 |      449 | 2024-06-08 | Monte           | L   | 0.980      | -            | -                | -                | -         |    -7.94 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           33 |      456 | 2024-06-08 | Quixal          | W   | 0.979      | -            | -                | -                | 0 (0.000) |     0.83 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           32 |      464 | 2024-06-08 | AMKAL           | L   | 0.979      | -            | -                | -                | -         |    -7.62 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           31 |      575 | 2024-06-06 | FAVBET          | L   | 0.966      | -            | -                | -                | -         |   -23.32 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           30 |      756 | 2024-06-01 | Insilio         | L   | 0.933      | -            | -                | -                | -         |   -17.48 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           29 |      814 | 2024-05-30 | V1dar           | W   | 0.920      | -            | -                | -                | 0 (0.000) |     1.55 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           28 |      901 | 2024-05-26 | 9 Pandas        | L   | 0.892      | -            | -                | -                | -         |   -12.06 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           27 |      922 | 2024-05-25 | FURIA           | W   | 0.886      | 0.435        | 0.253 (0.098)    | 0.509 (0.196)    | 0 (0.000) |    25.98 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           26 |      950 | 2024-05-23 | ECSTATIC        | W   | 0.873      | -            | -                | -                | 0 (0.000) |     0.62 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           25 |     1129 | 2024-05-18 | SINNERS         | W   | 0.839      | 0.435        | 0.057 (0.021)    | 0.767 (0.280)    | 0 (0.000) |    13.53 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           24 |     1203 | 2024-05-16 | Zero Tenacity   | W   | 0.826      | 0.435        | 0.153 (0.055)    | 1.000 (0.359)    | 0 (0.000) |    14.73 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           23 |     1327 | 2024-05-13 | Permitta        | W   | 0.807      | 0.435        | 0.038 (0.013)    | 0.837 (0.294)    | 0 (0.000) |     9.41 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           22 |     1428 | 2024-05-09 | Sashi           | L   | 0.779      | -            | -                | -                | -         |    -5.37 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           21 |     1452 | 2024-05-08 | Nemiga          | W   | 0.772      | 0.396        | 0.498 (0.152)    | 0.678 (0.207)    | 0 (0.000) |    19.77 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           20 |     1464 | 2024-05-07 | BLEED           | W   | 0.767      | 0.396        | 0.348 (0.106)    | 0.908 (0.276)    | 0 (0.000) |    20.92 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           19 |     1513 | 2024-05-05 | ex-Guild Eagles | W   | 0.752      | 0.396        | -                | 0.326 (0.097)    | 0 (0.000) |     9.45 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           18 |     1557 | 2024-05-02 | Soda            | W   | 0.733      | -            | -                | -                | -         |     0.83 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           17 |     1564 | 2024-05-02 | 500             | W   | 0.733      | -            | -                | -                | -         |     5.64 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           16 |     1628 | 2024-04-29 | Czech Republic  | L   | 0.713      | -            | -                | -                | -         |    -5.29 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           15 |     1632 | 2024-04-29 | SINNERS         | L   | 0.712      | -            | -                | -                | -         |    -9.01 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           14 |     1645 | 2024-04-28 | Sangal          | L   | 0.707      | -            | -                | -                | -         |    -7.10 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           13 |     1677 | 2024-04-27 | Nemiga          | L   | 0.699      | -            | -                | -                | -         |    -3.81 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           12 |     1725 | 2024-04-25 | Permitta        | W   | 0.686      | 0.435        | 0.038 (0.011)    | 0.837 (0.250)    | -         |    10.78 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           11 |     1763 | 2024-04-23 | HAVU            | W   | 0.673      | -            | -                | -                | -         |     4.27 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           10 |     1803 | 2024-04-21 | Nemiga          | L   | 0.658      | -            | -                | -                | -         |    -3.60 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            9 |     1824 | 2024-04-20 | Portugal        | W   | 0.653      | -            | -                | -                | -         |     4.37 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            8 |     1997 | 2024-04-16 | ENCE Academy    | W   | 0.626      | -            | -                | -                | -         |     5.40 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            7 |     2023 | 2024-04-15 | Lazer Cats      | W   | 0.618      | -            | -                | -                | -         |     1.50 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            6 |     2188 | 2024-04-09 | Aurora          | L   | 0.579      | -            | -                | -                | -         |    -0.44 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            5 |     2209 | 2024-04-08 | 9 Pandas        | W   | 0.573      | 0.143        | 0.125 (0.010)    | -                | -         |    12.45 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            4 |     2223 | 2024-04-08 | Aurora          | W   | 0.572      | 0.143        | 0.518 (0.042)    | 0.853 (0.070)    | -         |    17.66 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            3 |     2812 | 2024-03-11 | Insilio         | L   | 0.387      | -            | -                | -                | -         |    -6.23 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            2 |     2833 | 2024-03-10 | VP.Prodigy      | W   | 0.380      | 0.372        | 0.038 (0.005)    | 0.519 (0.073)    | -         |     5.11 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            1 |     2961 | 2024-03-05 | ARCRED          | L   | 0.348      | -            | -                | -                | -         |    -6.49 | buster, lattykk, neaLaN, oz1k, Ryujin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,695.85)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.893 | $5,000.00      | $4,466.15       |
| 2024-05-09 |      0.779 | $8,000.00      | $6,229.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
