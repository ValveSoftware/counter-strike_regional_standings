### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, kyossa, pauliiee, Zana<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [115](../standings_global.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
Final Rank Value:  831.5<br />
<br />
Final Rank Value (831.5) = Starting Rank Value (818.9) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 818.9
- 400 + ( ( 0.199 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 818.9


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
|           18 |      738 | 2024-06-01 | HSG fe            | L   | 0.936      | -            | -                | -                | -         |   -11.76 | JennyR, juliano, kyossa, pauliiee, Zana |
|           17 |      776 | 2024-05-31 | Imperial fe       | L   | 0.928      | -            | -                | -                | -         |    -4.80 | JennyR, juliano, kyossa, pauliiee, Zana |
|           16 |      787 | 2024-05-31 | FlyQuest RED      | W   | 0.926      | 0.524        | 0.028 (0.013)    | 0.201 (0.097)    | 1 (0.926) |    14.12 | JennyR, juliano, kyossa, pauliiee, Zana |
|           15 |     1101 | 2024-05-19 | NAVI Javelins     | L   | 0.845      | -            | -                | -                | -         |   -10.39 | JennyR, juliano, kyossa, pauliiee, Zana |
|           14 |     1128 | 2024-05-18 | Nemesis fe        | W   | 0.840      | 0.281        | -                | 0.000 (0.000)    | 0 (0.000) |     2.03 | JennyR, juliano, kyossa, pauliiee, Zana |
|           13 |     1814 | 2024-04-20 | Fearless Cheetahs | W   | 0.654      | 0.331        | 0.005 (0.001)    | 0.094 (0.020)    | 0 (0.000) |     7.91 | JennyR, juliano, kyossa, pauliiee, Zana |
|           12 |     1860 | 2024-04-19 | NIP Impact        | W   | 0.647      | 0.331        | 0.008 (0.002)    | 0.199 (0.043)    | 0 (0.000) |     8.43 | JennyR, juliano, kyossa, pauliiee, Zana |
|           11 |     2249 | 2024-04-07 | Imperial fe       | L   | 0.565      | -            | -                | -                | -         |    -2.64 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |     2264 | 2024-04-06 | Spirit fe         | W   | 0.559      | 0.262        | 0.004 (0.001)    | 0.043 (0.006)    | 0 (0.000) |     5.09 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |     2314 | 2024-04-04 | ENCE Athena       | W   | 0.547      | 0.331        | 0.004 (0.001)    | 0.063 (0.011)    | 0 (0.000) |     5.11 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |     2447 | 2024-03-28 | ex-GUILD fe       | L   | 0.501      | -            | -                | -                | -         |   -10.74 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     2722 | 2024-03-14 | Imperial fe       | L   | 0.408      | -            | -                | -                | -         |    -1.97 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     2930 | 2024-03-06 | Astralis W        | W   | 0.354      | 0.331        | 0.002 (0.000)    | 0.034 (0.004)    | 0 (0.000) |     2.87 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     3006 | 2024-03-03 | dreamcatchers fe  | W   | 0.334      | 0.250        | 0.008 (0.001)    | 0.089 (0.007)    | 0 (0.000) |     3.11 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     3148 | 2024-02-25 | NAVI Javelins     | L   | 0.286      | -            | -                | -                | -         |    -3.81 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     3153 | 2024-02-25 | Let Her Cook      | W   | 0.285      | 0.238        | 0.091 (0.006)    | 0.195 (0.013)    | 0 (0.000) |     6.73 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     3184 | 2024-02-24 | ex-GUILD fe       | W   | 0.279      | 0.238        | 0.004 (0.000)    | 0.099 (0.007)    | 0 (0.000) |     2.88 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     3717 | 2024-01-28 | QM fe             | W   | 0.100      | 0.250        | 0.000 (0.000)    | -                | -         |     0.46 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,914.19)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.941 | $7,000.00      | $6,588.42       |
| 2024-03-03 |      0.334 | $750.00        | $250.69         |
| 2024-01-28 |      0.100 | $750.00        | $75.08          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
