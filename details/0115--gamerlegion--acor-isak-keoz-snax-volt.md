### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, isak, Keoz, Snax, volt<br />
Global Rank: [115](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
<br />
Final Rank Value:  820.5<br />
<br />
Final Rank Value (820.5) = Starting Rank Value (796.5) + Head To Head Adjustments (24.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.129[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 796.5
- 400 + ( ( 0.192 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 796.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     3299 | 2024-03-20 | Imperial        | L   | 0.312      | -            | -                | -                | -         |    -0.66 | acoR, isak, Keoz, Snax, volt |
|           16 |     3317 | 2024-03-19 | Eternal Fire    | L   | 0.305      | -            | -                | -                | -         |    -0.06 | acoR, isak, Keoz, Snax, volt |
|           15 |     3327 | 2024-03-18 | Legacy          | W   | 0.298      | 0.143        | 0.119 (0.005)    | 0.562 (0.024)    | 1 (0.298) |     7.14 | acoR, isak, Keoz, Snax, volt |
|           14 |     3336 | 2024-03-17 | SAW             | L   | 0.294      | -            | -                | -                | -         |    -0.95 | acoR, isak, Keoz, Snax, volt |
|           13 |     3352 | 2024-03-17 | AMKAL           | W   | 0.292      | 0.143        | 0.132 (0.005)    | 0.484 (0.020)    | 1 (0.292) |     8.00 | acoR, isak, Keoz, Snax, volt |
|           12 |     3568 | 2024-03-08 | BIG             | L   | 0.233      | -            | -                | -                | -         |    -0.61 | acoR, isak, Keoz, Snax, volt |
|           11 |     3875 | 2024-02-24 | 9 Pandas        | L   | 0.146      | -            | -                | -                | -         |    -1.09 | acoR, isak, Keoz, Snax, volt |
|           10 |     3884 | 2024-02-24 | ex-Guild Eagles | W   | 0.144      | 0.143        | 0.007 (0.000)    | 0.226 (0.005)    | 1 (0.144) |     2.44 | acoR, isak, Keoz, Snax, volt |
|            9 |     3890 | 2024-02-23 | fnatic          | W   | 0.139      | 0.143        | 0.374 (0.007)    | 0.633 (0.013)    | 1 (0.139) |     4.32 | acoR, isak, Keoz, Snax, volt |
|            8 |     3908 | 2024-02-22 | HEROIC          | L   | 0.132      | -            | -                | -                | -         |    -0.05 | acoR, isak, Keoz, Snax, volt |
|            7 |     3934 | 2024-02-21 | OG              | W   | 0.125      | 0.143        | 0.144 (0.003)    | 0.133 (0.002)    | 1 (0.125) |     3.02 | acoR, isak, Keoz, Snax, volt |
|            6 |     3965 | 2024-02-20 | ENCE            | L   | 0.118      | -            | -                | -                | -         |    -0.08 | acoR, isak, Keoz, Snax, volt |
|            5 |     3987 | 2024-02-19 | PERA            | W   | 0.112      | 0.143        | 0.048 (0.001)    | 0.452 (0.007)    | 1 (0.112) |     2.42 | acoR, isak, Keoz, Snax, volt |
|            4 |     3996 | 2024-02-19 | Vitality        | L   | 0.111      | -            | -                | -                | -         |    -0.01 | acoR, isak, Keoz, Snax, volt |
|            3 |     4238 | 2024-02-06 | HEROIC          | L   | 0.025      | -            | -                | -                | -         |    -0.01 | acoR, isak, Keoz, Snax, volt |
|            2 |     4244 | 2024-02-05 | MOUZ            | L   | 0.019      | -            | -                | -                | -         |    -0.00 | acoR, isak, Keoz, Snax, volt |
|            1 |     4270 | 2024-02-04 | Monte           | W   | 0.011      | 1.000        | 0.062 (0.001)    | 0.170 (0.002)    | 1 (0.011) |     0.28 | acoR, isak, Keoz, Snax, volt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,313.32)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.313 | $10,000.00     | $3,128.21       |
| 2024-03-10 |      0.247 | $5,000.00      | $1,234.35       |
| 2024-02-11 |      0.059 | $16,000.00     | $950.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
