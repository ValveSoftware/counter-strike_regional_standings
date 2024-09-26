### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [75](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_26.md)<br />
Regional Rank: [3]( ../../standings_asia_2024_09_26.md)<br />
<br />
Final Rank Value:  922.4<br />
<br />
Final Rank Value (922.4) = Starting Rank Value (887.7) + Head To Head Adjustments (34.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.422[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.272[<sup>2</sup>](#table1)

The average of these factors is 0.258<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 887.7
- 400 + ( ( 0.258 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 887.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      861 | 2024-08-29 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -18.03 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           18 |      932 | 2024-08-28 | Rare Atom         | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.394 (0.056)    | 0 (0.000) |    13.13 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           17 |      986 | 2024-08-27 | Teamwork          | W   | 0.998      | 0.143        | -                | 0.151 (0.022)    | 0 (0.000) |     1.96 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           16 |      993 | 2024-08-27 | Steel Helmet      | W   | 0.997      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     2.59 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           15 |     1704 | 2024-08-06 | Chinggis Warriors | W   | 0.859      | 0.380        | 0.011 (0.003)    | 0.161 (0.053)    | 1 (0.859) |    10.35 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           14 |     1728 | 2024-08-05 | Rare Atom         | W   | 0.853      | 0.380        | 0.022 (0.007)    | 0.394 (0.128)    | 1 (0.853) |    12.50 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           13 |     1764 | 2024-08-04 | Gaimin Gladiators | W   | 0.846      | 0.380        | 0.020 (0.007)    | 0.583 (0.188)    | 1 (0.846) |    12.76 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     1833 | 2024-08-02 | Rare Atom         | L   | 0.833      | -            | -                | -                | -         |   -13.82 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|           11 |     1875 | 2024-08-01 | Rare Atom         | W   | 0.826      | 0.143        | 0.022 (0.003)    | 0.394 (0.046)    | 0 (0.000) |    11.94 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|           10 |     1882 | 2024-08-01 | CatEvil           | W   | 0.825      | 0.143        | -                | 0.212 (0.025)    | 0 (0.000) |     4.58 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            9 |     2574 | 2024-07-13 | Rare Atom         | L   | 0.700      | -            | -                | -                | -         |   -12.69 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            8 |     2576 | 2024-07-13 | CatEvil           | W   | 0.699      | 0.143        | -                | 0.212 (0.021)    | 0 (0.000) |     3.25 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            7 |     2588 | 2024-07-12 | Chinggis Warriors | W   | 0.692      | 0.143        | 0.011 (0.001)    | -                | 0 (0.000) |     9.45 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            6 |     2591 | 2024-07-12 | Alter Ego         | W   | 0.691      | 0.143        | -                | 0.280 (0.028)    | -         |     2.51 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            5 |     3058 | 2024-06-08 | Lynn Vision       | L   | 0.466      | -            | -                | -                | -         |    -7.39 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            4 |     3112 | 2024-06-07 | GR                | W   | 0.459      | 0.416        | 0.004 (0.001)    | 0.162 (0.031)    | -         |     3.29 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            3 |     3181 | 2024-06-06 | The QUBE          | W   | 0.452      | 0.416        | 0.003 (0.001)    | -                | -         |     2.83 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            2 |     3234 | 2024-06-05 | Lynn Vision       | L   | 0.446      | -            | -                | -                | -         |    -7.09 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            1 |     3280 | 2024-06-04 | LYG               | W   | 0.439      | 0.416        | 0.002 (0.000)    | -                | -         |     2.56 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,181.89)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-06 |      0.859 | $13,755.00     | $11,817.78      |
| 2024-06-09 |      0.473 | $5,000.00      | $2,364.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
