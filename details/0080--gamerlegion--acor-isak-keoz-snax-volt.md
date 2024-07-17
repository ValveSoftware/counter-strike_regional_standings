### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, isak, Keoz, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [80](../standings_global.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
Final Rank Value:  961.5<br />
<br />
Final Rank Value (961.5) = Starting Rank Value (921.9) + Head To Head Adjustments (39.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.230[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 921.9
- 400 + ( ( 0.243 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 921.9


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
|           22 |     2769 | 2024-03-20 | Imperial        | L   | 0.407      | -            | -                | -                | -         |    -0.70 | acoR, isak, Keoz, Snax, volt |
|           21 |     2787 | 2024-03-19 | Eternal Fire    | L   | 0.399      | -            | -                | -                | -         |    -0.17 | acoR, isak, Keoz, Snax, volt |
|           20 |     2797 | 2024-03-18 | Legacy          | W   | 0.392      | 0.143        | 0.178 (0.010)    | 0.572 (0.032)    | 1 (0.392) |     8.96 | acoR, isak, Keoz, Snax, volt |
|           19 |     2806 | 2024-03-17 | SAW             | L   | 0.388      | -            | -                | -                | -         |    -1.63 | acoR, isak, Keoz, Snax, volt |
|           18 |     2822 | 2024-03-17 | AMKAL           | W   | 0.386      | 0.143        | 0.134 (0.007)    | 0.523 (0.029)    | 1 (0.386) |     8.72 | acoR, isak, Keoz, Snax, volt |
|           17 |     3038 | 2024-03-08 | BIG             | L   | 0.327      | -            | -                | -                | -         |    -0.85 | acoR, isak, Keoz, Snax, volt |
|           16 |     3345 | 2024-02-24 | 9 Pandas        | L   | 0.240      | -            | -                | -                | -         |    -2.13 | acoR, isak, Keoz, Snax, volt |
|           15 |     3354 | 2024-02-24 | ex-Guild Eagles | W   | 0.239      | 0.143        | 0.011 (0.000)    | 0.298 (0.010)    | 1 (0.239) |     3.33 | acoR, isak, Keoz, Snax, volt |
|           14 |     3360 | 2024-02-23 | fnatic          | W   | 0.233      | 0.143        | 0.300 (0.010)    | 0.632 (0.021)    | 1 (0.233) |     7.18 | acoR, isak, Keoz, Snax, volt |
|           13 |     3378 | 2024-02-22 | HEROIC          | L   | 0.227      | -            | -                | -                | -         |    -0.07 | acoR, isak, Keoz, Snax, volt |
|           12 |     3404 | 2024-02-21 | OG              | W   | 0.220      | 0.143        | 0.210 (0.007)    | 0.178 (0.006)    | 1 (0.220) |     5.18 | acoR, isak, Keoz, Snax, volt |
|           11 |     3435 | 2024-02-20 | ENCE            | L   | 0.212      | -            | -                | -                | -         |    -0.33 | acoR, isak, Keoz, Snax, volt |
|           10 |     3457 | 2024-02-19 | PERA            | W   | 0.207      | 0.143        | 0.067 (0.002)    | 0.454 (0.013)    | 1 (0.207) |     3.87 | acoR, isak, Keoz, Snax, volt |
|            9 |     3466 | 2024-02-19 | Vitality        | L   | 0.205      | -            | -                | -                | -         |    -0.02 | acoR, isak, Keoz, Snax, volt |
|            8 |     3708 | 2024-02-06 | HEROIC          | L   | 0.120      | -            | -                | -                | -         |    -0.04 | acoR, isak, Keoz, Snax, volt |
|            7 |     3714 | 2024-02-05 | MOUZ            | L   | 0.114      | -            | -                | -                | -         |    -0.01 | acoR, isak, Keoz, Snax, volt |
|            6 |     3740 | 2024-02-04 | Monte           | W   | 0.106      | 1.000        | 0.103 (0.011)    | 0.241 (0.026)    | 1 (0.106) |     2.50 | acoR, isak, Keoz, Snax, volt |
|            5 |     3826 | 2024-02-01 | Virtus.pro      | W   | 0.086      | 0.143        | 0.349 (0.004)    | 0.367 (0.005)    | 1 (0.086) |     2.69 | acoR, isak, Keoz, Snax, volt |
|            4 |     3840 | 2024-01-31 | M80             | W   | 0.080      | 0.143        | 0.219 (0.003)    | 0.621 (0.007)    | 1 (0.080) |     2.19 | acoR, isak, Keoz, Snax, volt |
|            3 |     3908 | 2024-01-26 | FaZe            | L   | 0.047      | -            | -                | -                | -         |    -0.01 | acoR, isak, Keoz, Snax, volt |
|            2 |     3936 | 2024-01-25 | Liquid          | L   | 0.039      | -            | -                | -                | -         |    -0.03 | acoR, isak, Keoz, Snax, volt |
|            1 |     3954 | 2024-01-24 | FaZe            | W   | 0.032      | 0.581        | 0.902 (0.017)    | 0.479 (0.009)    | 1 (0.032) |     1.01 | acoR, isak, Keoz, Snax, volt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,759.22)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.407 | $10,000.00     | $4,073.34       |
| 2024-03-10 |      0.341 | $5,000.00      | $1,706.91       |
| 2024-02-11 |      0.154 | $16,000.00     | $2,462.97       |
| 2024-01-28 |      0.061 | $8,500.00      | $516.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
