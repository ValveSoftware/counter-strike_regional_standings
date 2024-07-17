### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [93](../standings_global.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
Final Rank Value:  925.9<br />
<br />
Final Rank Value (925.9) = Starting Rank Value (881.4) + Head To Head Adjustments (44.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.336[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.4
- 400 + ( ( 0.224 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 881.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      904 | 2024-06-01 | Fluxo Demons      | L   | 0.895      | -            | -                | -                | -         |   -14.02 | Angelka, Hanka, LETi, Liina, vicu |
|           20 |      936 | 2024-05-31 | TSM Shimmer       | W   | 0.889      | 0.524        | 0.028 (0.013)    | 0.217 (0.101)    | 1 (0.889) |     7.61 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |      949 | 2024-05-31 | Let Her Cook      | L   | 0.887      | -            | -                | -                | -         |   -12.24 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |     1259 | 2024-05-19 | Imperial fe       | W   | 0.807      | 0.281        | 0.196 (0.045)    | 0.333 (0.076)    | 0 (0.000) |    19.44 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |     1265 | 2024-05-19 | BIG EQUIPA        | W   | 0.806      | 0.281        | 0.027 (0.006)    | 0.210 (0.048)    | 0 (0.000) |     9.94 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |     1295 | 2024-05-18 | Spirit fe         | W   | 0.799      | 0.281        | 0.004 (0.001)    | 0.038 (0.009)    | 0 (0.000) |     4.59 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |     2030 | 2024-04-19 | Crescent fe       | W   | 0.607      | 0.331        | 0.007 (0.001)    | 0.101 (0.020)    | 0 (0.000) |     4.02 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |     2157 | 2024-04-16 | Imperial fe       | W   | 0.587      | 0.303        | 0.196 (0.035)    | 0.333 (0.059)    | 0 (0.000) |    14.92 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |     2178 | 2024-04-15 | NIP Impact        | W   | 0.580      | 0.303        | 0.008 (0.001)    | 0.191 (0.034)    | 0 (0.000) |     6.34 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     2196 | 2024-04-14 | Astralis W        | W   | 0.573      | -            | -                | -                | 0 (0.000) |     3.50 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     2209 | 2024-04-13 | Imperial fe       | L   | 0.566      | -            | -                | -                | -         |    -3.27 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     2250 | 2024-04-11 | Spirit fe         | W   | 0.553      | 0.303        | 0.004 (0.001)    | -                | 0 (0.000) |     3.92 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     2351 | 2024-04-09 | NIP Impact        | L   | 0.540      | -            | -                | -                | -         |   -11.45 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     2473 | 2024-04-04 | Spirit fe         | W   | 0.508      | 0.331        | 0.004 (0.001)    | 0.038 (0.006)    | 0 (0.000) |     3.65 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     2512 | 2024-04-03 | Let Her Cook      | L   | 0.501      | -            | -                | -                | -         |    -5.45 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     2889 | 2024-03-14 | 1WIN Gang         | W   | 0.368      | -            | -                | -                | -         |     2.74 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     3091 | 2024-03-06 | Fearless Cheetahs | W   | 0.315      | 0.331        | -                | 0.088 (0.009)    | -         |     2.77 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     3312 | 2024-02-25 | BIG EQUIPA        | W   | 0.247      | 0.238        | 0.027 (0.002)    | 0.210 (0.012)    | -         |     3.28 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     3316 | 2024-02-25 | ENCE Athena       | W   | 0.246      | -            | -                | -                | -         |     1.82 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     3350 | 2024-02-24 | Crescent fe       | W   | 0.240      | -            | -                | -                | -         |     1.97 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     3729 | 2024-02-04 | VIOLET            | W   | 0.107      | -            | -                | -                | -         |     0.37 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,217.18)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.902 | $7,000.00      | $6,311.15       |
| 2024-05-19 |      0.807 | $2,000.00      | $1,613.85       |
| 2024-04-16 |      0.587 | $3,500.00      | $2,056.23       |
| 2024-02-25 |      0.247 | $630.00        | $155.49         |
| 2024-02-04 |      0.107 | $750.00        | $80.46          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
