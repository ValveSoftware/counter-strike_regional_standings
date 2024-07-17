### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Goofy, Kylar, podi, sdy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [23](../standings_global.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
Final Rank Value:  1375.8<br />
<br />
Final Rank Value (1375.8) = Starting Rank Value (1451.2) + Head To Head Adjustments (-75.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.598[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.236[<sup>2</sup>](#table1)
- LAN Wins: 0.628[<sup>2</sup>](#table1)

The average of these factors is 0.489<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1451.2
- 400 + ( ( 0.489 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1451.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      327 | 2024-06-16 | Falcons            | L   | 0.992      | -            | -                | -                | -         |    -8.47 | gla1ve, Goofy, Kylar, podi, sdy    |
|           43 |      396 | 2024-06-14 | Complexity         | W   | 0.980      | 0.500        | 0.445 (0.218)    | 0.412 (0.202)    | 1 (0.980) |    27.25 | gla1ve, Goofy, Kylar, podi, sdy    |
|           42 |      403 | 2024-06-14 | MIBR               | W   | 0.979      | 0.500        | 0.269 (0.131)    | 0.614 (0.301)    | 1 (0.979) |    22.77 | gla1ve, Goofy, Kylar, podi, sdy    |
|           41 |      738 | 2024-06-06 | HEROIC             | L   | 0.927      | -            | -                | -                | -         |    -3.41 | gla1ve, Goofy, Kylar, podi, sdy    |
|           40 |      751 | 2024-06-06 | Astralis           | L   | 0.926      | -            | -                | -                | -         |    -1.65 | gla1ve, Goofy, Kylar, podi, sdy    |
|           39 |      788 | 2024-06-05 | Sashi              | W   | 0.921      | 0.715        | 0.215 (0.142)    | 1.000 (0.659)    | 1 (0.921) |    10.99 | gla1ve, Goofy, Kylar, podi, sdy    |
|           38 |      798 | 2024-06-05 | The MongolZ        | L   | 0.920      | -            | -                | -                | -         |    -1.10 | gla1ve, Goofy, Kylar, podi, sdy    |
|           37 |      808 | 2024-06-05 | Ninjas in Pyjamas  | L   | 0.919      | -            | -                | -                | -         |    -4.18 | gla1ve, Goofy, Kylar, podi, sdy    |
|           36 |      913 | 2024-06-01 | DMS                | L   | 0.894      | -            | -                | -                | -         |   -24.83 | gla1ve, Goofy, Kylar, podi, sdy    |
|           35 |      919 | 2024-06-01 | KOI                | W   | 0.894      | 0.143        | -                | 0.448 (0.057)    | -         |     6.22 | gla1ve, Goofy, Kylar, podi, sdy    |
|           34 |      928 | 2024-06-01 | DMS                | L   | 0.892      | -            | -                | -                | -         |   -25.33 | gla1ve, Goofy, Kylar, podi, sdy    |
|           33 |     1208 | 2024-05-21 | Liquid             | L   | 0.819      | -            | -                | -                | -         |    -6.13 | dycha, gla1ve, Goofy, hades, Kylar |
|           32 |     1291 | 2024-05-18 | fnatic             | W   | 0.800      | 0.769        | 0.300 (0.185)    | 0.632 (0.389)    | -         |    16.23 | dycha, gla1ve, Goofy, hades, Kylar |
|           31 |     1315 | 2024-05-17 | Gaimin Gladiators  | W   | 0.795      | 0.769        | 0.067 (0.041)    | 0.488 (0.298)    | -         |     4.70 | dycha, gla1ve, Goofy, hades, Kylar |
|           30 |     1328 | 2024-05-17 | fnatic             | L   | 0.793      | -            | -                | -                | -         |    -8.04 | dycha, gla1ve, Goofy, hades, Kylar |
|           29 |     1684 | 2024-05-04 | FURIA              | L   | 0.707      | -            | -                | -                | -         |    -5.62 | dycha, gla1ve, Goofy, hades, Kylar |
|           28 |     1700 | 2024-05-03 | GamerLegion        | L   | 0.700      | -            | -                | -                | -         |   -14.92 | dycha, gla1ve, Goofy, hades, Kylar |
|           27 |     1719 | 2024-05-02 | Monte              | W   | 0.694      | 0.889        | 0.103 (0.063)    | 0.241 (0.149)    | 1 (0.694) |     4.06 | dycha, gla1ve, Goofy, hades, Kylar |
|           26 |     1746 | 2024-05-01 | Bad News Kangaroos | W   | 0.687      | 0.889        | 0.028 (0.017)    | 0.134 (0.082)    | 1 (0.687) |     1.06 | dycha, gla1ve, Goofy, hades, Kylar |
|           25 |     1777 | 2024-04-30 | GamerLegion        | L   | 0.679      | -            | -                | -                | -         |   -15.25 | dycha, gla1ve, Goofy, hades, Kylar |
|           24 |     2042 | 2024-04-19 | AMKAL              | L   | 0.606      | -            | -                | -                | -         |   -15.85 | dycha, gla1ve, Goofy, hades, Kylar |
|           23 |     2125 | 2024-04-17 | Enterprise         | W   | 0.593      | 0.384        | -                | 0.635 (0.145)    | -         |     1.57 | dycha, gla1ve, Goofy, hades, Kylar |
|           22 |     2294 | 2024-04-10 | OG                 | L   | 0.547      | -            | -                | -                | -         |   -14.28 | dycha, gla1ve, Goofy, hades, Kylar |
|           21 |     2377 | 2024-04-08 | FORZE              | L   | 0.533      | -            | -                | -                | -         |   -15.36 | dycha, gla1ve, Goofy, hades, Kylar |
|           20 |     2488 | 2024-04-04 | Aurora Young Blud  | W   | 0.506      | 0.384        | -                | 0.388 (0.075)    | -         |     0.39 | dycha, gla1ve, Goofy, hades, Kylar |
|           19 |     2783 | 2024-03-19 | FURIA              | L   | 0.401      | -            | -                | -                | -         |    -3.31 | dycha, gla1ve, Goofy, hades, Kylar |
|           18 |     2799 | 2024-03-18 | paiN               | L   | 0.392      | -            | -                | -                | -         |    -4.12 | dycha, gla1ve, Goofy, hades, Kylar |
|           17 |     2808 | 2024-03-17 | KOI                | W   | 0.388      | -            | -                | -                | 1 (0.388) |     2.31 | dycha, gla1ve, Goofy, hades, Kylar |
|           16 |     2825 | 2024-03-17 | Imperial           | L   | 0.386      | -            | -                | -                | -         |    -5.67 | dycha, gla1ve, Goofy, hades, Kylar |
|           15 |     2955 | 2024-03-12 | B8                 | L   | 0.354      | -            | -                | -                | -         |    -9.36 | dycha, gla1ve, Goofy, hades, Kylar |
|           14 |     2968 | 2024-03-11 | HEROIC             | L   | 0.348      | -            | -                | -                | -         |    -1.88 | dycha, gla1ve, Goofy, hades, Kylar |
|           13 |     2981 | 2024-03-11 | Metizport          | W   | 0.347      | -            | -                | -                | -         |     0.70 | dycha, gla1ve, Goofy, hades, Kylar |
|           12 |     3381 | 2024-02-22 | Astralis           | W   | 0.226      | 0.143        | 0.549 (0.018)    | -                | 1 (0.226) |     6.52 | dycha, gla1ve, Goofy, hades, Kylar |
|           11 |     3403 | 2024-02-21 | Vitality           | L   | 0.220      | -            | -                | -                | -         |    -0.34 | dycha, gla1ve, Goofy, hades, Kylar |
|           10 |     3435 | 2024-02-20 | GamerLegion        | W   | 0.212      | -            | -                | -                | 1 (0.212) |     0.33 | dycha, gla1ve, Goofy, hades, Kylar |
|            9 |     3456 | 2024-02-19 | ex-Guild Eagles    | W   | 0.207      | -            | -                | -                | 1 (0.207) |     0.26 | dycha, gla1ve, Goofy, hades, Kylar |
|            8 |     3464 | 2024-02-19 | Spirit             | L   | 0.205      | -            | -                | -                | -         |    -0.31 | dycha, gla1ve, Goofy, hades, Kylar |
|            7 |     3668 | 2024-02-09 | Falcons            | L   | 0.141      | -            | -                | -                | -         |    -1.59 | dycha, gla1ve, Goofy, hades, Kylar |
|            6 |     3702 | 2024-02-06 | MOUZ               | L   | 0.121      | -            | -                | -                | -         |    -0.18 | dycha, gla1ve, Goofy, hades, Kylar |
|            5 |     3713 | 2024-02-05 | G2                 | W   | 0.114      | 1.000        | 0.738 (0.084)    | -                | 1 (0.114) |     3.40 | dycha, gla1ve, Goofy, hades, Kylar |
|            4 |     3749 | 2024-02-03 | Vitality           | W   | 0.102      | 1.000        | 0.733 (0.074)    | -                | -         |     3.05 | dycha, gla1ve, Goofy, hades, Kylar |
|            3 |     3788 | 2024-02-02 | The MongolZ        | W   | 0.094      | -            | -                | -                | -         |     2.81 | dycha, gla1ve, Goofy, hades, Kylar |
|            2 |     3817 | 2024-02-01 | Astralis           | W   | 0.088      | -            | -                | -                | -         |     2.56 | dycha, gla1ve, Goofy, hades, Kylar |
|            1 |     3843 | 2024-01-31 | BIG                | L   | 0.080      | -            | -                | -                | -         |    -1.46 | dycha, gla1ve, Goofy, hades, Kylar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,086.67)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $10,000.00     | $9,930.65       |
| 2024-06-09 |      0.947 | $8,000.00      | $7,575.78       |
| 2024-05-23 |      0.834 | $12,500.00     | $10,421.96      |
| 2024-05-12 |      0.760 | $7,000.00      | $5,321.72       |
| 2024-04-14 |      0.574 | $15,000.00     | $8,605.81       |
| 2024-03-20 |      0.407 | $10,000.00     | $4,073.34       |
| 2024-02-11 |      0.154 | $40,000.00     | $6,157.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
