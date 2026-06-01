### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: aiM, ASTRA, Emmsan, Hanka, sosya<br />
Global Rank: [285](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [181]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  586.4<br />
<br />
Final Rank Value (586.4) = Starting Rank Value (620.7) + Head To Head Adjustments (-34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.7
- 400 + ( ( 0.116 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 620.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2178 | 2026-04-01 | Grindas            | L   | 0.793      | -            | -                | -                | -         |   -14.73 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           15 |     2271 | 2026-03-31 | EXSAD              | W   | 0.786      | 0.384        | 0.000 (0.000)    | 0.004 (0.001)    | 0 (0.000) |     6.20 | aiM, ASTRA, Emmsan, sosya, wieenN |
|           14 |     2331 | 2026-03-30 | The Last Resort    | L   | 0.780      | -            | -                | -                | -         |    -3.31 | aiM, ASTRA, Emmsan, sosya, wieenN |
|           13 |     2874 | 2026-03-21 | Leo                | L   | 0.721      | -            | -                | -                | -         |    -4.14 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           12 |     2958 | 2026-03-20 | Ursa               | L   | 0.712      | -            | -                | -                | -         |    -2.23 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           11 |     3086 | 2026-03-17 | Persona Grata      | L   | 0.692      | -            | -                | -                | -         |    -5.30 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|           10 |     3868 | 2026-03-01 | PsychoFace         | L   | 0.586      | -            | -                | -                | -         |    -1.32 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            9 |     4023 | 2026-02-26 | Fuzos              | L   | 0.566      | -            | -                | -                | -         |    -5.15 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            8 |     4627 | 2026-02-14 | Let Her Cook       | L   | 0.488      | -            | -                | -                | -         |    -7.32 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            7 |     4652 | 2026-02-14 | Clutchain fe       | L   | 0.487      | -            | -                | -                | -         |    -6.44 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            6 |     4691 | 2026-02-13 | Fingers Crossed fe | W   | 0.482      | 0.384        | 0.001 (0.000)    | 0.032 (0.006)    | 0 (0.000) |     7.10 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            5 |     4766 | 2026-02-12 | Hashiras           | L   | 0.472      | -            | -                | -                | -         |    -4.57 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            4 |     4782 | 2026-02-11 | Let Her Cook       | W   | 0.468      | 0.384        | 0.004 (0.001)    | 0.048 (0.009)    | 0 (0.000) |     7.68 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            3 |     4828 | 2026-02-10 | confidence         | W   | 0.461      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.11 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            2 |     4842 | 2026-02-10 | Nexus              | L   | 0.459      | -            | -                | -                | -         |    -4.46 | aiM, ASTRA, Emmsan, Hanka, sosya  |
|            1 |     4854 | 2026-02-09 | TNC                | L   | 0.454      | -            | -                | -                | -         |    -1.46 | aiM, ASTRA, Emmsan, Hanka, sosya  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($988.20)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.494 | $2,000.00      | $988.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
