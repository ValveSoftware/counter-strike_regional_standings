### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [70](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_12_02.md)<br />
Regional Rank: [3]( ../../standings_asia_2024_12_02.md)<br />
<br />
Final Rank Value:  1020.4<br />
<br />
Final Rank Value (1020.4) = Starting Rank Value (971.3) + Head To Head Adjustments (49.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.353[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 971.3
- 400 + ( ( 0.285 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 971.3


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
|           20 |      635 | 2024-11-03 | Lynn Vision       | W   | 1.000      | 0.399        | 0.033 (0.013)    | 0.257 (0.102)    | 1 (1.000) |    16.28 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           19 |      661 | 2024-11-02 | ATOX              | W   | 0.999      | 0.399        | 0.020 (0.008)    | 0.135 (0.054)    | 1 (0.999) |     8.85 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           18 |     1000 | 2024-10-16 | Bromo             | W   | 0.886      | 0.143        | 0.008 (0.001)    | 0.191 (0.024)    | 0 (0.000) |     4.54 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           17 |     2431 | 2024-08-29 | Rare Atom         | L   | 0.566      | -            | -                | -                | -         |    -8.84 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           16 |     2502 | 2024-08-28 | Rare Atom         | W   | 0.558      | 0.143        | 0.037 (0.003)    | 0.312 (0.025)    | 0 (0.000) |     9.03 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           15 |     2556 | 2024-08-27 | Teamwork          | W   | 0.552      | 0.143        | -                | 0.083 (0.007)    | 0 (0.000) |     1.19 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           14 |     2563 | 2024-08-27 | Steel Helmet      | W   | 0.551      | -            | -                | -                | 0 (0.000) |     0.61 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           13 |     3274 | 2024-08-06 | Chinggis Warriors | W   | 0.413      | 0.380        | 0.005 (0.001)    | 0.090 (0.014)    | 1 (0.413) |     3.01 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     3298 | 2024-08-05 | Rare Atom         | W   | 0.406      | 0.380        | 0.037 (0.006)    | 0.312 (0.048)    | 1 (0.406) |     6.92 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           11 |     3334 | 2024-08-04 | Gaimin Gladiators | W   | 0.400      | 0.380        | 0.061 (0.009)    | 0.921 (0.140)    | 1 (0.400) |     6.11 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           10 |     3403 | 2024-08-02 | Rare Atom         | L   | 0.386      | -            | -                | -                | -         |    -5.60 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            9 |     3445 | 2024-08-01 | Rare Atom         | W   | 0.379      | 0.143        | 0.037 (0.002)    | 0.312 (0.017)    | 0 (0.000) |     6.51 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            8 |     3452 | 2024-08-01 | CatEvil           | W   | 0.379      | 0.143        | -                | 0.169 (0.009)    | -         |     1.22 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            7 |     4144 | 2024-07-13 | Rare Atom         | L   | 0.253      | -            | -                | -                | -         |    -3.79 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            6 |     4146 | 2024-07-13 | CatEvil           | W   | 0.253      | -            | -                | -                | -         |     0.74 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            5 |     4158 | 2024-07-12 | Chinggis Warriors | W   | 0.245      | 0.143        | 0.005 (0.000)    | -                | -         |     1.87 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            4 |     4161 | 2024-07-12 | Alter Ego         | W   | 0.245      | -            | -                | -                | -         |     0.56 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            3 |     4628 | 2024-06-08 | Lynn Vision       | L   | 0.020      | -            | -                | -                | -         |    -0.24 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            2 |     4682 | 2024-06-07 | GR                | W   | 0.013      | 0.416        | 0.024 (0.000)    | -                | -         |     0.09 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |
|            1 |     4751 | 2024-06-06 | The QUBE          | W   | 0.006      | -            | -                | -                | -         |     0.01 | JamYoung, k4Mi, Mercury, Moseyuh, zdr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,809.39)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-08-06 |      0.413 | $13,755.00     | $5,677.35       |
| 2024-06-09 |      0.026 | $5,000.00      | $132.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
