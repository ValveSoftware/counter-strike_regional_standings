### Roster Details<br />
Team Name: Mindfreak<br />
Roster: Crunchy, gump, pain, Texta, tucks<br />
Global Rank: [162](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [25]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  646.1<br />
<br />
Final Rank Value (646.1) = Starting Rank Value (643.9) + Head To Head Adjustments (2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.032[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.9
- 400 + ( ( 0.129 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 643.9


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
|           14 |     2599 | 2025-03-27 | FURY              | W   | 0.332      | 0.333        | 0.001 (0.000)    | 0.181 (0.020)    | 0 (0.000) |     4.94 | Crunchy, gump, pain, Texta, tucks |
|           13 |     2601 | 2025-03-27 | FURY              | W   | 0.331      | 0.333        | 0.001 (0.000)    | 0.181 (0.020)    | 0 (0.000) |     5.08 | Crunchy, gump, pain, Texta, tucks |
|           12 |     2776 | 2025-03-21 | ex-TALON          | L   | 0.292      | -            | -                | -                | -         |    -3.69 | Crunchy, gump, pain, Texta, tucks |
|           11 |     2778 | 2025-03-21 | Vantage           | W   | 0.291      | 0.345        | 0.000 (0.000)    | 0.029 (0.003)    | 1 (0.291) |     2.77 | Crunchy, gump, pain, Texta, tucks |
|           10 |     2780 | 2025-03-20 | Ground Zero       | L   | 0.290      | -            | -                | -                | -         |    -3.92 | Crunchy, gump, pain, Texta, tucks |
|            9 |     3396 | 2025-03-03 | Nemiga            | L   | 0.172      | -            | -                | -                | -         |    -0.31 | Crunchy, gump, pain, Texta, tucks |
|            8 |     3418 | 2025-03-02 | 3DMAX             | L   | 0.165      | -            | -                | -                | -         |    -0.02 | Crunchy, gump, pain, Texta, tucks |
|            7 |     3450 | 2025-03-01 | Aurora            | L   | 0.158      | -            | -                | -                | -         |    -0.01 | Crunchy, gump, pain, Texta, tucks |
|            6 |     3740 | 2025-02-19 | Only One Word     | L   | 0.092      | -            | -                | -                | -         |    -1.23 | Crunchy, gump, pain, Texta, tucks |
|            5 |     3744 | 2025-02-19 | Only One Word     | L   | 0.092      | -            | -                | -                | -         |    -1.24 | Crunchy, gump, pain, Texta, tucks |
|            4 |     3777 | 2025-02-18 | Ground Zero       | L   | 0.085      | -            | -                | -                | -         |    -1.19 | Crunchy, gump, pain, Texta, tucks |
|            3 |     3778 | 2025-02-18 | Ground Zero       | W   | 0.085      | 0.333        | 0.005 (0.000)    | 0.211 (0.006)    | 0 (0.000) |     1.50 | Crunchy, gump, pain, Texta, tucks |
|            2 |     4028 | 2025-02-08 | Chinggis Warriors | L   | 0.024      | -            | -                | -                | -         |    -0.06 | gump, pain, Rickeh, Texta, tucks  |
|            1 |     4091 | 2025-02-07 | Believe           | L   | 0.017      | -            | -                | -                | -         |    -0.40 | gump, pain, Rickeh, Texta, tucks  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,735.11)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      0.585 | $2,000.00      | $1,170.43       |
| 2025-03-05 |      0.188 | $3,000.00      | $564.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
