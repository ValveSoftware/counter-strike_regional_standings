### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [91](../standings_global.md)<br />
Regional Rank: [65]( ../standings_europe.md)<br />
Final Rank Value:  926.0<br />
<br />
Final Rank Value (926.0) = Starting Rank Value (878.7) + Head To Head Adjustments (47.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.108[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 878.7
- 400 + ( ( 0.227 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 878.7


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
|           21 |      740 | 2024-06-01 | Fluxo Demons      | L   | 0.935      | -            | -                | -                | -         |   -14.66 | Angelka, Hanka, LETi, Liina, vicu |
|           20 |      772 | 2024-05-31 | TSM Shimmer       | W   | 0.929      | 0.524        | 0.028 (0.014)    | 0.228 (0.111)    | 1 (0.929) |     7.79 | Angelka, Hanka, LETi, Liina, vicu |
|           19 |      785 | 2024-05-31 | Let Her Cook      | L   | 0.927      | -            | -                | -                | -         |   -13.00 | Angelka, Hanka, LETi, Liina, vicu |
|           18 |     1095 | 2024-05-19 | Imperial fe       | W   | 0.847      | 0.281        | 0.195 (0.046)    | 0.347 (0.083)    | 0 (0.000) |    20.27 | Angelka, Hanka, LETi, Liina, vicu |
|           17 |     1101 | 2024-05-19 | BIG EQUIPA        | W   | 0.845      | 0.281        | 0.027 (0.006)    | 0.225 (0.054)    | 0 (0.000) |    10.39 | Angelka, Hanka, LETi, Liina, vicu |
|           16 |     1131 | 2024-05-18 | Spirit fe         | W   | 0.839      | 0.281        | 0.004 (0.001)    | 0.043 (0.010)    | 0 (0.000) |     4.70 | Angelka, Hanka, LETi, Liina, vicu |
|           15 |     1866 | 2024-04-19 | Crescent fe       | W   | 0.647      | 0.331        | 0.007 (0.002)    | 0.107 (0.023)    | 0 (0.000) |     4.18 | Angelka, Hanka, LETi, Liina, vicu |
|           14 |     1993 | 2024-04-16 | Imperial fe       | W   | 0.627      | 0.303        | 0.195 (0.037)    | 0.347 (0.066)    | 0 (0.000) |    15.89 | Angelka, Hanka, LETi, Liina, vicu |
|           13 |     2014 | 2024-04-15 | NIP Impact        | W   | 0.620      | 0.303        | 0.008 (0.002)    | 0.199 (0.037)    | 0 (0.000) |     6.80 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     2032 | 2024-04-14 | Astralis W        | W   | 0.613      | -            | -                | -                | 0 (0.000) |     3.77 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     2045 | 2024-04-13 | Imperial fe       | L   | 0.606      | -            | -                | -                | -         |    -3.52 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     2086 | 2024-04-11 | Spirit fe         | W   | 0.593      | 0.303        | 0.004 (0.001)    | -                | 0 (0.000) |     4.16 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     2187 | 2024-04-09 | NIP Impact        | L   | 0.579      | -            | -                | -                | -         |   -12.27 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     2309 | 2024-04-04 | Spirit fe         | W   | 0.547      | 0.331        | 0.004 (0.001)    | 0.043 (0.008)    | 0 (0.000) |     3.89 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     2348 | 2024-04-03 | Let Her Cook      | L   | 0.541      | -            | -                | -                | -         |    -5.92 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     2725 | 2024-03-14 | 1WIN Gang         | W   | 0.407      | -            | -                | -                | -         |     2.98 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     2927 | 2024-03-06 | Fearless Cheetahs | W   | 0.354      | 0.331        | -                | 0.094 (0.011)    | -         |     3.10 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     3148 | 2024-02-25 | BIG EQUIPA        | W   | 0.286      | 0.238        | 0.027 (0.002)    | 0.225 (0.015)    | -         |     3.81 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     3152 | 2024-02-25 | ENCE Athena       | W   | 0.285      | -            | -                | -                | -         |     2.10 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     3186 | 2024-02-24 | Crescent fe       | W   | 0.279      | -            | -                | -                | -         |     2.29 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     3565 | 2024-02-04 | VIOLET            | W   | 0.147      | -            | -                | -                | -         |     0.52 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,766.97)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.941 | $7,000.00      | $6,588.42       |
| 2024-05-19 |      0.847 | $2,000.00      | $1,693.07       |
| 2024-04-16 |      0.627 | $3,500.00      | $2,194.87       |
| 2024-02-25 |      0.286 | $630.00        | $180.44         |
| 2024-02-04 |      0.147 | $750.00        | $110.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
